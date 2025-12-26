import { Link } from 'react-router-dom'
import { LoginButton } from '../components/auth/LoginButton'
import { useAuth } from '../hooks/useAuth'

export function HomePage() {
  const { user } = useAuth()

  const characters = [
    { name: 'Burbujasaurio', img: '/img/galeria/Burbujasaurio.png', desc: '¡Le encantan las burbujas mágicas!' },
    { name: 'Chefisaurio', img: '/img/galeria/Chefisaurio.png', desc: 'Cocina las galletas más ricas.' },
    { name: 'Escobasaurio', img: '/img/galeria/Escobasaurio.png', desc: 'Mantiene todo limpio y brillante.' },
    { name: 'Lectosaurio', img: '/img/galeria/Lectosaurio.png', desc: 'Devora libros y cuenta historias.' },
    { name: 'Magosaurio', img: '/img/galeria/Magosaurio.png', desc: '¡Hace trucos sorprendentes!' },
    { name: 'Michizzaurio', img: '/img/galeria/Michizzaurio.png', desc: 'El rey de las fiestas de pizza.' },
    { name: 'Pintasaurio', img: '/img/galeria/Pintasaurio.png', desc: 'Llena el mundo de colores.' },
    { name: 'Rockosaurio', img: '/img/galeria/Rockosaurio.png', desc: '¡Toca la guitarra todo el día!' },
    { name: 'Rodasaurio', img: '/img/galeria/Rodasaurio.png', desc: 'El más veloz sobre ruedas.' },
    { name: 'Trapesasaurio', img: '/img/galeria/Trapesasaurio.png', desc: 'Acrobacias son su pasión.' },
    { name: 'Zensaurio', img: '/img/galeria/Zensaurio.png', desc: 'Paz y tranquilidad siempre.' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center p-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gati-cielo/20 to-transparent pointer-events-none" />
        
        <img 
          src="/img/GatisauriosTitulo.svg" 
          alt="Gatisaurios - Para Colorear" 
          className="max-w-4xl w-full mx-auto mb-8 animate-float z-10"
        />
        
        <div className="z-10 text-center">
          <p className="text-2xl md:text-3xl text-gati-marron font-mango mb-8 max-w-2xl mx-auto">
            ¡Únete a la manada más divertida! Colorea, juega y vive grandes aventuras.
          </p>
          
          {user ? (
            <Link to="/coloring" className="btn-primary inline-flex items-center gap-3 text-2xl px-10 py-4">
              <span>🎨</span> ¡Vamos a Pintar!
            </Link>
          ) : (
            <div className="scale-125">
              <LoginButton />
            </div>
          )}
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4 bg-white/40">
        <div className="container mx-auto">
          <h2 className="text-5xl text-center text-gati-marron mb-16">
            ¡Mucha Diversión!
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/coloring" className="card-glass p-8 text-center group card-hover">
              <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🎨</div>
              <h3 className="text-3xl mb-4 text-gati-verde">Colorear</h3>
              <p className="text-xl text-gati-marron/80 font-barlow">
                Elige tu Gatisaurio favorito y dale vida con tus colores.
              </p>
            </Link>

            <Link to="/stories" className="card-glass p-8 text-center group card-hover">
              <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-300">📚</div>
              <h3 className="text-3xl mb-4 text-gati-naranja">Cuentos</h3>
              <p className="text-xl text-gati-marron/80 font-barlow">
                Escucha historias mágicas antes de dormir.
              </p>
            </Link>

            <Link to="/game" className="card-glass p-8 text-center group card-hover">
              <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🎮</div>
              <h3 className="text-3xl mb-4 text-gati-morado">Juegos</h3>
              <p className="text-xl text-gati-marron/80 font-barlow">
                Aventuras interactivas para aprender jugando.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Characters Carousel/Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl text-center text-gati-marron mb-12">
            Conoce a la Manada
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {characters.map((char, index) => (
              <div 
                key={char.name} 
                className="card-glass p-4 text-center group card-hover flex flex-col items-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 w-full flex items-center justify-center mb-4 overflow-hidden">
                  <img 
                    src={char.img}
                    alt={char.name}
                    className="max-h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-2xl text-gati-marron mb-2">{char.name}</h4>
                <p className="text-gati-marron/70 font-barlow leading-tight">
                  {char.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Teaser */}
      <section className="py-20 px-4 bg-gati-naranja/10 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl text-gati-marron mb-8">
            Tienda Mágica
          </h2>
          <p className="text-2xl font-barlow text-gati-marron mb-12 max-w-2xl mx-auto">
            ¡Llévate a casa un pedacito de magia! Peluches, playeras y tazas de tus personajes favoritos.
          </p>
          
          <Link to="/tienda" className="btn-accent inline-flex items-center gap-2">
            <span>🛍️</span> Visitar Tienda
          </Link>

          {/* Decorative floating items */}
          <div className="hidden md:block absolute top-1/2 left-10 text-8xl animate-float opacity-50">🧸</div>
          <div className="hidden md:block absolute top-1/2 right-10 text-8xl animate-float-delayed opacity-50">👕</div>
        </div>
      </section>
    </div>
  )
}
