import { useState } from 'react'

export function MagicalMap() {
  const [activeRegion, setActiveRegion] = useState(null)

  const regions = [
    {
      id: 'volcan',
      name: 'Volcán de Chocolate',
      desc: '¡Cuidado, está muy caliente y dulce!',
      character: 'Chefisaurio',
      img: '/img/personajes/chefisaurio.svg',
      color: 'bg-red-500',
      pos: 'top-[15%] left-[20%]',
      icon: '🌋'
    },
    {
      id: 'bosque',
      name: 'Bosque de Burbujas',
      desc: 'Donde las burbujas nunca explotan.',
      character: 'Burbujasaurio',
      img: '/img/personajes/burbujasaurio.svg',
      color: 'bg-gati-verde',
      pos: 'top-[40%] right-[25%]',
      icon: '🌳'
    },
    {
      id: 'playa',
      name: 'Playa de la Calma',
      desc: 'Ideal para meditar y relajarse.',
      character: 'Zensaurio',
      img: '/img/personajes/zensaurio.svg',
      color: 'bg-gati-cielo',
      pos: 'bottom-[20%] left-[30%]',
      icon: '🏖️'
    },
    {
      id: 'ciudad',
      name: 'Ciudad Rock',
      desc: '¡La música nunca para aquí!',
      character: 'Rockosaurio',
      img: '/img/personajes/rockosaurio.svg',
      color: 'bg-gati-morado',
      pos: 'bottom-[35%] right-[15%]',
      icon: '🎸'
    },
    {
      id: 'cielo',
      name: 'Nubes de Algodón',
      desc: 'El hogar de los sueños más altos.',
      character: 'Lectosaurio',
      img: '/img/personajes/lectosaurio.svg',
      color: 'bg-gati-azul',
      pos: 'top-[10%] right-[40%]',
      icon: '☁️'
    }
  ]

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-mango-title text-center mb-12">Explora el Mundo Gatisaurio</h2>
        
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] bg-[#A8D5BA] rounded-[3rem] shadow-2xl overflow-hidden border-8 border-[#8FBC8F] group perspective-1000">
          
          {/* Simulated Map Texture (CSS Generated) */}
          <div className="absolute inset-0 opacity-40">
            {/* Water */}
            <div className="absolute top-0 right-0 w-full h-full bg-[#87CEEB] rounded-full transform scale-150 translate-x-1/2 -translate-y-1/4"></div>
            {/* Land Masses */}
            <div className="absolute top-1/4 left-1/4 w-1/3 h-1/2 bg-[#556B2F] rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/2 bg-[#8B4513] rounded-full blur-3xl opacity-30"></div>
          </div>

          {/* Map Grid/Compass Decor */}
          <div className="absolute top-8 left-8 text-4xl opacity-50 animate-pulse">🧭</div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none"></div>

          {/* Interactive Markers */}
          {regions.map((region) => (
            <button
              key={region.id}
              className={`absolute ${region.pos} transform transition-all duration-500 hover:scale-125 hover:z-20 group-hover:animate-float`}
              onClick={() => setActiveRegion(region)}
            >
              <div className="relative">
                {/* Pin Head */}
                <div className={`w-12 h-12 md:w-16 md:h-16 ${region.color} rounded-full border-4 border-white shadow-lg flex items-center justify-center text-2xl md:text-3xl animate-bounce`} style={{ animationDuration: '2s' }}>
                  {region.icon}
                </div>
                {/* Pin Shadow */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/20 rounded-full blur-sm"></div>
                
                {/* Tooltip on Hover */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-bold text-gati-marron pointer-events-none">
                  {region.name}
                </div>
              </div>
            </button>
          ))}

          {/* Character Modal / Overlay (Inside Map) */}
          {activeRegion && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
              <div className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl transform scale-100 transition-transform">
                <button 
                  onClick={(e) => { e.stopPropagation(); setActiveRegion(null); }}
                  className="absolute top-4 right-4 text-gati-marron/50 hover:text-red-500 text-2xl font-bold w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-red-100 transition-colors"
                >
                  ✕
                </button>
                
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-40 h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center p-4 shadow-inner">
                    <img src={activeRegion.img} alt={activeRegion.character} className="w-full h-full object-contain animate-bounce-slow" />
                  </div>
                  
                  <div className="text-center md:text-left flex-1">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-2 ${activeRegion.color} uppercase tracking-wider`}>
                      {activeRegion.name}
                    </span>
                    <h3 className="text-3xl font-chewy text-gati-marron mb-2">{activeRegion.character}</h3>
                    <p className="text-gati-marron/80 font-barlow text-lg leading-tight">
                      {activeRegion.desc}
                    </p>
                    <button 
                      onClick={() => setActiveRegion(null)}
                      className="mt-6 text-gati-naranja font-bold hover:underline"
                    >
                      Seguir Explorando ➜
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
        
        <p className="text-center text-gati-marron/60 mt-6 font-barlow italic">
          Haz clic en los marcadores para descubrir dónde vive cada Gatisaurio.
        </p>
      </div>
    </section>
  )
}
