import { useState } from 'react'
import { Play, Pause, Volume2, Clock, Star } from 'lucide-react'

export function StoriesPage() {
  const [activeCategory, setActiveCategory] = useState('todos')
  const [playing, setPlaying] = useState(null)

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'dormir', label: 'Para Dormir 🌙' },
    { id: 'aventura', label: 'Aventuras 🗺️' },
    { id: 'aprender', label: 'Para Aprender 🎓' }
  ]

  const stories = [
    {
      id: 1,
      title: "La Aventura de Burbujasaurio",
      author: "Gatisaurios",
      duration: "5:30",
      category: "aventura",
      age: "3-5 años",
      image: "/img/galeria/Burbujasaurio.png",
      color: "gati-cielo"
    },
    {
      id: 2,
      title: "Las Galletas Mágicas",
      author: "Chefisaurio",
      duration: "4:15",
      category: "aprender",
      age: "4-6 años",
      image: "/img/galeria/Chefisaurio.png",
      color: "gati-naranja"
    },
    {
      id: 3,
      title: "Sueños Estelares",
      author: "Zensaurio",
      duration: "8:00",
      category: "dormir",
      age: "0-99 años",
      image: "/img/galeria/Zensaurio.png",
      color: "gati-morado"
    }
  ]

  const filteredStories = activeCategory === 'todos' 
    ? stories 
    : stories.filter(story => story.category === activeCategory)

  return (
    <div className="min-h-screen bg-gati-bg pb-20">
      {/* Hero Header */}
      <div className="bg-gradient-to-b from-gati-cielo/20 to-transparent pt-20 pb-10 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl text-gati-marron mb-6 drop-shadow-sm text-shadow">Cuentos Mágicos</h1>
          <p className="text-xl text-gati-marron/80 max-w-2xl mx-auto font-barlow">
            Historias increíbles para escuchar, soñar y aprender. ¡Elige tu favorita!
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 mb-12 overflow-x-auto">
        <div className="flex justify-center gap-4 min-w-max pb-4">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-chewy text-xl transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gati-naranja text-white shadow-lg scale-105'
                  : 'bg-white text-gati-marron hover:bg-white/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stories Grid */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map(story => (
            <div key={story.id} className="card-glass p-6 group hover:-translate-y-2 transition-all duration-300">
              <div className="flex gap-6 items-center mb-6">
                <div className={`w-24 h-24 rounded-2xl bg-${story.color}/10 flex items-center justify-center p-2`}>
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <div className="flex gap-2 mb-2">
                    <span className={`badge bg-${story.color}/10 text-${story.color}`}>
                      {story.category}
                    </span>
                    <span className="badge bg-gray-100 text-gray-600">
                      {story.age}
                    </span>
                  </div>
                  <h3 className="text-2xl text-gati-marron leading-none mb-1">{story.title}</h3>
                  <p className="text-gati-marron/60 text-sm font-barlow">{story.author}</p>
                </div>
              </div>

              {/* Player Controls */}
              <div className="bg-white/50 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-3">
                  <button 
                    onClick={() => setPlaying(playing === story.id ? null : story.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md transition-all hover:scale-105 ${
                      playing === story.id ? 'bg-gati-naranja' : 'bg-gati-verde'
                    }`}
                  >
                    {playing === story.id ? <Pause size={24} /> : <Play size={24} fill="currentColor" />}
                  </button>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-${story.color} transition-all duration-1000`}
                        style={{ width: playing === story.id ? '45%' : '0%' }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-barlow font-bold text-gati-marron/60">
                    {story.duration}
                  </span>
                </div>
                
                <div className="flex justify-between items-center text-gati-marron/40">
                  <div className="flex items-center gap-2">
                    <Volume2 size={16} />
                    <div className="w-16 h-1 bg-gray-200 rounded-full">
                      <div className="w-3/4 h-full bg-gati-marron/40 rounded-full" />
                    </div>
                  </div>
                  <button className="hover:text-gati-amarillo transition-colors">
                    <Star size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
