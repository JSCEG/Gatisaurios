import { useState } from 'react'
import { ProtectedRoute } from '../components/auth/ProtectedRoute'
import { Download, Heart, Share2, PaintBucket } from 'lucide-react'

export function ColoringPage() {
  const [activeFilter, setActiveFilter] = useState('todos')

  const drawings = [
    { id: 1, name: 'Burbujasaurio Feliz', category: 'facil', image: '/img/personajes/burbujasaurio.svg', color: 'bg-gati-cielo' },
    { id: 2, name: 'Chefisaurio Cocinando', category: 'medio', image: '/img/personajes/chefisaurio.svg', color: 'bg-gati-naranja' },
    { id: 3, name: 'Escobasaurio Limpiando', category: 'facil', image: '/img/personajes/escobasaurio.svg', color: 'bg-gati-verde' },
    { id: 4, name: 'Lectosaurio Leyendo', category: 'dificil', image: '/img/personajes/lectosaurio.svg', color: 'bg-gati-azul' },
    { id: 5, name: 'Rockosaurio Tocando', category: 'medio', image: '/img/personajes/rockosaurio.svg', color: 'bg-gati-morado' },
    { id: 6, name: 'Rodasaurio Corriendo', category: 'facil', image: '/img/personajes/rodasaurio.svg', color: 'bg-gati-azul' },
  ]

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'facil', label: 'Fácil ⭐' },
    { id: 'medio', label: 'Medio ⭐⭐' },
    { id: 'dificil', label: 'Difícil ⭐⭐⭐' },
  ]

  const filteredDrawings = activeFilter === 'todos' 
    ? drawings 
    : drawings.filter(d => d.category === activeFilter)

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gati-bg pb-20">
        {/* Header */}
        <div className="bg-gradient-to-b from-gati-verde/20 to-transparent pt-20 pb-10 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-mango-title mb-6">¡A Colorear!</h1>
            <p className="text-xl text-gati-marron/80 max-w-2xl mx-auto font-barlow">
              Elige tu dibujo favorito, imprímelo o coloréalo en línea. ¡Deja volar tu imaginación!
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-chewy text-xl transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gati-verde text-white shadow-lg scale-105'
                    : 'bg-white text-gati-marron hover:bg-white/80'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDrawings.map(drawing => (
              <div key={drawing.id} className="card-glass group relative overflow-hidden">
                {/* Image Container */}
                <div className={`aspect-square ${drawing.color}/10 flex items-center justify-center p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img 
                    src={drawing.image} 
                    alt={drawing.name}
                    className="w-full h-full object-contain filter drop-shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                  />
                  
                  {/* Hover Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <button className="w-12 h-12 rounded-full bg-white text-gati-marron shadow-lg flex items-center justify-center hover:bg-gati-naranja hover:text-white transition-colors" title="Colorear en línea">
                      <PaintBucket size={24} />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white text-gati-marron shadow-lg flex items-center justify-center hover:bg-gati-verde hover:text-white transition-colors" title="Descargar PDF">
                      <Download size={24} />
                    </button>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl text-gati-marron leading-tight">{drawing.name}</h3>
                    <button className="text-gati-marron/40 hover:text-red-500 transition-colors">
                      <Heart size={24} />
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <span className="badge bg-gray-100 text-gray-600">
                      {drawing.category.toUpperCase()}
                    </span>
                    <button className="text-sm font-barlow font-bold text-gati-marron/60 flex items-center gap-1 hover:text-gati-naranja transition-colors">
                      <Share2 size={16} />
                      Compartir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
