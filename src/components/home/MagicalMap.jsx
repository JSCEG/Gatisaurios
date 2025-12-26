import { useState, useRef, useEffect } from 'react'

export function MagicalMap() {
  const [activeRegion, setActiveRegion] = useState(null)
  const [view, setView] = useState({ x: 0, y: 0, scale: 1 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  // Markers Configuration
  const regions = [
    {
      id: 'volcan',
      name: 'Volcán de Chocolate',
      desc: '¡Cuidado, está muy caliente y dulce!',
      character: 'Chefisaurio',
      img: '/img/personajes/chefisaurio.svg',
      color: 'bg-red-500',
      left: 20, top: 20, // Percentages
      icon: '🌋'
    },
    {
      id: 'bosque',
      name: 'Bosque de Burbujas',
      desc: 'Donde las burbujas nunca explotan.',
      character: 'Burbujasaurio',
      img: '/img/personajes/burbujasaurio.svg',
      color: 'bg-gati-verde',
      left: 70, top: 40,
      icon: '🌳'
    },
    {
      id: 'playa',
      name: 'Playa de la Calma',
      desc: 'Ideal para meditar y relajarse.',
      character: 'Zensaurio',
      img: '/img/personajes/zensaurio.svg',
      color: 'bg-gati-cielo',
      left: 30, top: 70,
      icon: '🏖️'
    },
    {
      id: 'ciudad',
      name: 'Ciudad Rock',
      desc: '¡La música nunca para aquí!',
      character: 'Rockosaurio',
      img: '/img/personajes/rockosaurio.svg',
      color: 'bg-gati-morado',
      left: 80, top: 65,
      icon: '🎸'
    },
    {
      id: 'cielo',
      name: 'Nubes de Algodón',
      desc: 'El hogar de los sueños más altos.',
      character: 'Lectosaurio',
      img: '/img/personajes/lectosaurio.svg',
      color: 'bg-gati-azul',
      left: 60, top: 15,
      icon: '☁️'
    }
  ]

  // Zoom Logic
  const handleWheel = (e) => {
    e.preventDefault()
    const scaleAmount = -e.deltaY * 0.001
    const newScale = Math.min(Math.max(0.5, view.scale + scaleAmount), 3)
    
    // Simple zoom to center logic (can be improved to zoom to cursor)
    setView(prev => ({ ...prev, scale: newScale }))
  }

  // Pan Logic
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX - view.x, y: e.clientY - view.y })
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    setView(prev => ({
      ...prev,
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    }))
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Touch support for mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true)
      setDragStart({ x: e.touches[0].clientX - view.x, y: e.touches[0].clientY - view.y })
    }
  }

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return
    // e.preventDefault() // Optional: careful with blocking scroll
    setView(prev => ({
      ...prev,
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y
    }))
  }

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-mango-title text-center mb-12">Explora el Mundo Gatisaurio</h2>
        
        {/* Map Container */}
        <div 
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto aspect-[16/9] bg-[#87CEEB] rounded-[3rem] shadow-2xl overflow-hidden border-8 border-[#8FBC8F] cursor-move select-none"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          
          {/* Transformable Content */}
          <div 
            className="w-full h-full relative origin-center transition-transform duration-75 ease-out"
            style={{ 
              transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
            }}
          >
            {/* SVG MAP */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grass" patternUnits="userSpaceOnUse" width="100" height="100">
                  <path d="M0 0h100v100H0z" fill="#90EE90" />
                  <circle cx="20" cy="20" r="2" fill="#76c976" />
                  <circle cx="70" cy="70" r="3" fill="#76c976" />
                </pattern>
                
                {/* Symbols */}
                <symbol id="tree" viewBox="0 0 20 20">
                  <path d="M10 15v5M10 15l-5-8 5-2 5 2-5 8z" stroke="#228B22" fill="#228B22" />
                  <circle cx="10" cy="8" r="5" fill="#32CD32" />
                </symbol>
                
                <symbol id="mountain" viewBox="0 0 30 30">
                  <path d="M15 2L5 25h20L15 2z" fill="#A0522D" stroke="#8B4513" strokeWidth="2" />
                  <path d="M15 2l-4 9h8l-4-9z" fill="#FFF" />
                </symbol>

                <symbol id="house" viewBox="0 0 20 20">
                  <rect x="4" y="8" width="12" height="10" fill="#D2691E" />
                  <path d="M2 8l8-6 8 6" fill="#8B0000" />
                  <rect x="8" y="12" width="4" height="6" fill="#4A3423" />
                </symbol>
              </defs>

              {/* Ocean Background */}
              <rect width="100%" height="100%" fill="#87CEEB" />
              
              {/* Islands / Continents */}
              <g filter="drop-shadow(3px 3px 2px rgba(0,0,0,0.2))">
                {/* Main Continent */}
                <path d="M150 100 Q 250 50, 400 100 T 700 150 Q 850 100, 900 250 T 750 450 Q 600 550, 400 500 T 100 400 Q 50 250, 150 100 Z" fill="url(#grass)" stroke="#556B2F" strokeWidth="2" />
                
                {/* Small Island (Beach) */}
                <path d="M200 450 Q 250 420, 300 450 T 350 500 Q 300 550, 250 520 T 200 450 Z" fill="#F4A460" stroke="#CD853F" strokeWidth="2" />
              </g>

              {/* Rivers */}
              <path d="M400 200 Q 450 250, 500 300 T 600 350" fill="none" stroke="#87CEEB" strokeWidth="8" strokeLinecap="round" />
              
              {/* Roads */}
              <path d="M250 150 Q 300 200, 400 250 T 600 300 T 750 400" fill="none" stroke="#8B4513" strokeWidth="4" strokeDasharray="5,5" opacity="0.6" />

              {/* Features Placement */}
              <use href="#mountain" x="200" y="120" width="40" height="40" />
              <use href="#mountain" x="230" y="140" width="50" height="50" />
              <use href="#mountain" x="180" y="150" width="40" height="40" />

              {/* Forests */}
              <g>
                <use href="#tree" x="650" y="200" width="20" height="20" />
                <use href="#tree" x="670" y="210" width="25" height="25" />
                <use href="#tree" x="690" y="190" width="20" height="20" />
                <use href="#tree" x="660" y="230" width="22" height="22" />
              </g>

              {/* Settlements */}
              <use href="#house" x="400" y="250" width="25" height="25" />
              <use href="#house" x="430" y="260" width="20" height="20" />
              
              <use href="#house" x="750" y="400" width="30" height="30" />
            </svg>

            {/* Interactive Markers Overlay */}
            {regions.map((region) => (
              <button
                key={region.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125 hover:z-20 group"
                style={{ left: `${region.left}%`, top: `${region.top}%` }}
                onClick={(e) => { e.stopPropagation(); setActiveRegion(region); }}
                // Prevent drag propagation
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <div className={`w-12 h-12 md:w-16 md:h-16 ${region.color} rounded-full border-4 border-white shadow-lg flex items-center justify-center text-2xl md:text-3xl animate-bounce`}>
                    {region.icon}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/20 rounded-full blur-sm"></div>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-bold text-gati-marron pointer-events-none">
                    {region.name}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Controls UI (Fixed) */}
          <div className="absolute bottom-6 right-6 flex flex-col gap-2 z-10">
            <button 
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl font-bold hover:bg-gray-100 active:scale-95"
              onClick={() => setView(prev => ({ ...prev, scale: Math.min(prev.scale + 0.5, 3) }))}
            >
              +
            </button>
            <button 
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl font-bold hover:bg-gray-100 active:scale-95"
              onClick={() => setView(prev => ({ ...prev, scale: Math.max(prev.scale - 0.5, 0.5) }))}
            >
              -
            </button>
            <button 
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xl font-bold hover:bg-gray-100 active:scale-95"
              onClick={() => setView({ x: 0, y: 0, scale: 1 })}
              title="Reset"
            >
              ↺
            </button>
          </div>

          {/* Legend UI (Fixed) */}
          <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl z-10 hidden md:block border-2 border-gati-marron/10">
            <h4 className="font-chewy text-gati-marron text-lg mb-2">Leyenda</h4>
            <ul className="space-y-2 text-sm font-barlow text-gati-marron/80">
              <li className="flex items-center gap-2"><span className="text-xl">🌋</span> Volcanes</li>
              <li className="flex items-center gap-2"><span className="text-xl">🌳</span> Bosques</li>
              <li className="flex items-center gap-2"><span className="text-xl">🏖️</span> Playas</li>
              <li className="flex items-center gap-2"><span className="text-xl">🏠</span> Aldeas</li>
            </ul>
          </div>

          {/* Modal Overlay */}
          {activeRegion && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
              onClick={(e) => { e.stopPropagation(); setActiveRegion(null); }}
            >
              <div 
                className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl transform scale-100 transition-transform border-4 border-gati-naranja"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setActiveRegion(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-red-100 text-gati-marron transition-colors"
                >
                  ✕
                </button>
                
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center p-4 shadow-inner border-4 border-white">
                    <img src={activeRegion.img} alt={activeRegion.character} className="w-full h-full object-contain" />
                  </div>
                  
                  <div className="text-center md:text-left flex-1">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <span className="text-2xl">{activeRegion.icon}</span>
                      <h3 className="text-3xl font-chewy text-gati-marron">{activeRegion.character}</h3>
                    </div>
                    <div className={`inline-block px-3 py-0.5 rounded-full text-xs font-bold text-white mb-3 ${activeRegion.color} uppercase tracking-wider`}>
                      {activeRegion.name}
                    </div>
                    <p className="text-gati-marron/80 font-barlow text-lg leading-tight mb-4">
                      {activeRegion.desc}
                    </p>
                    <button 
                      onClick={() => setActiveRegion(null)}
                      className="btn-primary py-2 px-6 text-lg"
                    >
                      ¡Visitar!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
        
        <p className="text-center text-gati-marron/60 mt-6 font-barlow italic">
          Usa el mouse o tus dedos para moverte y hacer zoom en el mapa.
        </p>
      </div>
    </section>
  )
}
