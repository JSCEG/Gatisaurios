import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LoginButton } from '../auth/LoginButton'
import { MagicalMap } from '../home/MagicalMap'
import { useAuth } from '../../hooks/useAuth'

export function HomePage() {
  const { user } = useAuth()
  const [currentBgIndex, setCurrentBgIndex] = useState(0)

  // Array de imágenes temáticas para el hero
  const heroBackgrounds = [
    '/img/hero/hero-landscape.png', // Paisaje natural
    '/img/hero/hero-christmas.png', // Navidad
    '/img/hero/hero-halloween.png', // Día de Muertos
    '/img/hero/hero-sports.png' // Fútbol
  ]

  // Cambiar imagen cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % heroBackgrounds.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [heroBackgrounds.length])

  const characters = [
    { name: 'Burbujasaurio', img: '/img/personajes/burbujasaurio.svg', desc: '¡Le encantan las burbujas mágicas!', color: 'text-gati-cielo' },
    { name: 'Chefisaurio', img: '/img/personajes/chefisaurio.svg', desc: 'Cocina las galletas más ricas.', color: 'text-gati-naranja' },
    { name: 'Escobasaurio', img: '/img/personajes/escobasaurio.svg', desc: 'Mantiene todo limpio y brillante.', color: 'text-gati-verde' },
    { name: 'Lectosaurio', img: '/img/personajes/lectosaurio.svg', desc: 'Devora libros y cuenta historias.', color: 'text-gati-azul' },
    { name: 'Magosaurio', img: '/img/galeria/Magosaurio.png', desc: '¡Hace trucos sorprendentes!', color: 'text-gati-morado' },
    { name: 'Michizzaurio', img: '/img/galeria/Michizzaurio.png', desc: 'El rey de las fiestas de pizza.', color: 'text-gati-amarillo' },
    { name: 'Pintasaurio', img: '/img/galeria/Pintasaurio.png', desc: 'Llena el mundo de colores.', color: 'text-gati-naranja' },
    { name: 'Rockosaurio', img: '/img/personajes/rockosaurio.svg', desc: '¡Toca la guitarra todo el día!', color: 'text-gati-morado' },
    { name: 'Rodasaurio', img: '/img/personajes/rodasaurio.svg', desc: 'El más veloz sobre ruedas.', color: 'text-gati-azul' },
    { name: 'Trapesasaurio', img: '/img/personajes/trapesaurio.svg', desc: 'Acrobacias son su pasión.', color: 'text-gati-verde' },
    { name: 'Zensaurio', img: '/img/personajes/zensaurio.svg', desc: 'Paz y tranquilidad siempre.', color: 'text-gati-cielo' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[85vh] flex flex-col items-center justify-center p-4 overflow-hidden bg-cover bg-center animate-herobg-gravity transition-all duration-1000"
        style={{
          backgroundImage: `url('${heroBackgrounds[currentBgIndex]}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] pointer-events-none" />

        <img
          src="/img/GatisauriosTitulo.png"
          alt="Gatisaurios - Para Colorear"
          className="max-w-4xl w-full mx-auto mb-4 animate-float z-10 drop-shadow-2xl filter"
        />

        <div className="z-10 text-center relative">
          <p className="text-2xl md:text-4xl text-white font-chewy mb-6 max-w-3xl mx-auto tracking-wide leading-relaxed bg-black/40 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-2xl drop-shadow-lg">
            ¡Únete a la manada más divertida! Colorea, juega y vive grandes aventuras.
          </p>

          {user ? (
            <Link to="/coloring" className="btn-primary inline-flex items-center gap-3 text-2xl px-12 py-5 transform hover:rotate-2 shadow-xl hover:shadow-2xl ring-4 ring-white/50">
              <span>🎨</span> ¡Vamos a Pintar!
            </Link>
          ) : (
            <div className="scale-110 transform transition-transform hover:scale-115">
              <LoginButton />
            </div>
          )}
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-mango-title text-center mb-6">Planes de Aventura</h2>
          <p className="text-2xl text-center text-gati-marron/80 font-barlow mb-16 max-w-2xl mx-auto">
            Elige cómo quieres explorar el mundo Gatisaurio. ¡Cancela cuando quieras!
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan Explorador (Free) */}
            <div className="card-glass p-8 flex flex-col relative overflow-hidden border-2 border-transparent hover:border-gati-marron/10">
              <div className="text-center mb-8">
                <h3 className="text-3xl text-gati-marron font-chewy mb-2">Explorador</h3>
                <div className="text-4xl font-bold text-gati-marron mb-2 font-barlow">Gratis</div>
                <p className="text-gati-marron/60">Para empezar a descubrir</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-gati-marron/80">
                  <span className="text-gati-verde">✔</span> 3 Cuentos básicos
                </li>
                <li className="flex items-center gap-3 text-gati-marron/80">
                  <span className="text-gati-verde">✔</span> 5 Dibujos para colorear
                </li>
                <li className="flex items-center gap-3 text-gati-marron/80">
                  <span className="text-gati-verde">✔</span> Acceso a la tienda
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl border-2 border-gati-marron/20 text-gati-marron font-chewy text-xl hover:bg-gati-marron/5 transition-colors">
                Comenzar Gratis
              </button>
            </div>

            {/* Plan Aventurero (Monthly) - Featured */}
            <div className="card-glass p-8 flex flex-col relative transform md:-translate-y-4 border-4 border-gati-naranja shadow-2xl">
              <div className="absolute top-0 right-0 bg-gati-naranja text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                Más Popular
              </div>
              <div className="text-center mb-8">
                <h3 className="text-3xl text-gati-naranja font-chewy mb-2">Aventurero</h3>
                <div className="text-5xl font-bold text-gati-marron mb-2 font-barlow">$99<span className="text-xl text-gati-marron/50 font-normal">/mes</span></div>
                <p className="text-gati-marron/60">Diversión sin límites</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-gati-marron">
                  <span className="bg-gati-naranja text-white rounded-full p-0.5 w-5 h-5 flex items-center justify-center text-xs">✔</span> <strong>Todos</strong> los cuentos
                </li>
                <li className="flex items-center gap-3 text-gati-marron">
                  <span className="bg-gati-naranja text-white rounded-full p-0.5 w-5 h-5 flex items-center justify-center text-xs">✔</span> <strong>Galería completa</strong> de dibujos
                </li>
                <li className="flex items-center gap-3 text-gati-marron">
                  <span className="bg-gati-naranja text-white rounded-full p-0.5 w-5 h-5 flex items-center justify-center text-xs">✔</span> Sin anuncios
                </li>
                <li className="flex items-center gap-3 text-gati-marron">
                  <span className="bg-gati-naranja text-white rounded-full p-0.5 w-5 h-5 flex items-center justify-center text-xs">✔</span> Modo sin conexión
                </li>
              </ul>
              <button className="btn-primary w-full py-4 text-xl shadow-gati-naranja/30">
                Prueba 7 días Gratis
              </button>
            </div>

            {/* Plan Legendario (Yearly) */}
            <div className="card-glass p-8 flex flex-col relative overflow-hidden border-2 border-transparent hover:border-gati-morado/30">
              <div className="text-center mb-8">
                <h3 className="text-3xl text-gati-morado font-chewy mb-2">Legendario</h3>
                <div className="text-4xl font-bold text-gati-marron mb-2 font-barlow">$899<span className="text-xl text-gati-marron/50 font-normal">/año</span></div>
                <p className="text-gati-verde font-bold text-sm bg-gati-verde/10 inline-block px-2 py-1 rounded-lg">¡Ahorras 25%!</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-gati-marron/80">
                  <span className="text-gati-morado">✔</span> Todo lo de Aventurero
                </li>
                <li className="flex items-center gap-3 text-gati-marron/80">
                  <span className="text-gati-morado">✔</span> <strong>Stickers físicos</strong> de regalo
                </li>
                <li className="flex items-center gap-3 text-gati-marron/80">
                  <span className="text-gati-morado">✔</span> Diploma de Gatisaurio
                </li>
                <li className="flex items-center gap-3 text-gati-marron/80">
                  <span className="text-gati-morado">✔</span> Acceso anticipado
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl border-2 border-gati-morado text-gati-morado font-chewy text-xl hover:bg-gati-morado hover:text-white transition-colors">
                Elegir Anual
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
