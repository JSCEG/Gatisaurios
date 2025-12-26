import { Link } from 'react-router-dom'
import { LoginButton } from '../components/auth/LoginButton'
import { MagicalMap } from '../components/home/MagicalMap'
import { useAuth } from '../hooks/useAuth'

export function HomePage() {
  const { user } = useAuth()

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
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center p-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gati-cielo/30 via-transparent to-gati-bg/50 pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gati-amarillo/20 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-20 w-72 h-72 bg-gati-morado/20 rounded-full blur-3xl" />

        <img
          src="/img/GatisauriosTitulo.svg"
          alt="Gatisaurios - Para Colorear"
          className="max-w-4xl w-full mx-auto mb-8 animate-float z-10 drop-shadow-2xl filter"
        />

        <div className="z-10 text-center relative">
          <p className="text-2xl md:text-4xl text-gati-marron font-chewy mb-10 max-w-3xl mx-auto drop-shadow-sm tracking-wide leading-relaxed">
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

      {/* Activities Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm -skew-y-2 transform origin-top-left scale-110" />

        <div className="container mx-auto relative z-10">
          <h2 className="text-mango-title text-center mb-20">
            ¡Mucha Diversión!
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { to: "/coloring", icon: "🎨", title: "Colorear", desc: "Elige tu Gatisaurio favorito y dale vida con tus colores.", color: "text-gati-verde" },
              { to: "/stories", icon: "📚", title: "Cuentos", desc: "Escucha historias mágicas antes de dormir.", color: "text-gati-naranja" },
              { to: "/game", icon: "🎮", title: "Juegos", desc: "Aventuras interactivas para aprender jugando.", color: "text-gati-morado" }
            ].map((activity, idx) => (
              <Link key={idx} to={activity.to} className="card-glass p-10 text-center group relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-${activity.color.split('-')[2]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="text-9xl mb-8 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 filter drop-shadow-lg">{activity.icon}</div>
                <h3 className={`text-4xl mb-4 ${activity.color} font-chewy tracking-wider`}>{activity.title}</h3>
                <p className="text-xl text-gati-marron/90 font-barlow font-medium leading-relaxed">
                  {activity.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Magical Map Section */}
      <MagicalMap />

      {/* Video Promo Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-gati-amarillo/10">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1 bg-gati-naranja text-white rounded-full text-sm font-bold tracking-wider mb-6 uppercase animate-pulse">
            ¡Trailer Oficial!
          </div>
          <h2 className="text-mango-title mb-12">
            ¡Mira la Magia en Acción!
          </h2>

          <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white/80 transform hover:scale-[1.01] transition-transform duration-500 relative group">
            <div className="absolute inset-0 bg-gati-naranja/20 group-hover:bg-transparent transition-colors pointer-events-none z-10" />
            <div className="relative pt-[56.25%] bg-black w-full">
              <iframe
                src="https://www.youtube.com/embed/U4b49FX0w6o"
                title="Trailer Gatisaurios"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <p className="text-2xl text-gati-marron font-barlow mt-10 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo los Gatisaurios cobran vida en este video especial. <br />
            <span className="text-gati-naranja font-bold">¡Prepárate para rugir y maullar de emoción!</span>
          </p>
        </div>

        {/* Background Decor */}
        <div className="absolute top-20 left-10 text-8xl animate-float opacity-50">🎬</div>
        <div className="absolute bottom-20 right-10 text-8xl animate-float-delayed opacity-50">🍿</div>
        <div className="absolute top-1/2 right-[10%] w-64 h-64 bg-gati-naranja/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-[10%] w-80 h-80 bg-gati-amarillo/20 rounded-full blur-3xl -z-10" />
      </section>

      {/* Characters Gallery Section */}
      <section className="py-24 px-0 relative">
        <div className="container mx-auto px-4 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-mango-title text-center md:text-left">
            Conoce a la Manada
          </h2>
          <div className="hidden md:flex gap-2 text-gati-marron/60 font-barlow text-lg animate-pulse">
            <span>← Desliza para ver más →</span>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="w-full overflow-x-auto pb-12 pt-4 px-4 md:px-0 scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-6 md:gap-8 w-max px-4 md:px-8">
            {characters.map((char, index) => (
              <div
                key={char.name}
                className="snap-center shrink-0 w-[280px] md:w-[320px] card-glass p-6 text-center group relative overflow-hidden transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl bg-white/40"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-${char.color.replace('text-', '')}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="h-64 w-full flex items-center justify-center mb-6 relative z-10">
                  <img
                    src={char.img}
                    alt={char.name}
                    className="max-h-full w-auto object-contain transform group-hover:scale-115 group-hover:rotate-3 transition-transform duration-500 filter drop-shadow-xl"
                    loading="lazy"
                  />
                </div>

                <div className="relative z-10">
                  <h4 className={`text-3xl ${char.color} mb-3 font-chewy tracking-wide`}>{char.name}</h4>
                  <p className="text-gati-marron/80 font-barlow text-lg font-medium leading-tight px-2">
                    {char.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Promo Section */}
      <section className="py-24 px-4 bg-gati-verde/10 relative overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1 bg-gati-verde text-white rounded-full text-sm font-bold tracking-wider mb-6 uppercase animate-bounce">
              ¡Exclusivo!
            </div>
            <h2 className="text-mango-title mb-6">
              El Libro Mágico
            </h2>
            <p className="text-2xl text-gati-marron font-barlow mb-8 leading-relaxed">
              Descubre las historias originales de los Gatisaurios. Incluye un <strong className="text-gati-verde">Código QR Mágico</strong> que desbloquea sorpresas y juegos exclusivos en la app.
            </p>
            <ul className="text-left max-w-md mx-auto md:mx-0 mb-10 space-y-4 text-lg font-barlow text-gati-marron/80">
              <li className="flex items-center gap-3">
                <span className="bg-gati-verde text-white rounded-full p-1">✓</span> 50 Páginas de aventuras a color
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-gati-verde text-white rounded-full p-1">✓</span> Stickers de regalo
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-gati-verde text-white rounded-full p-1">✓</span> Acceso a contenido secreto
              </li>
            </ul>
            <a
              href="https://www.amazon.com.mx/Gatisaurios-Gatitos-disfrazados-dinosaurios-colorear/dp/B0F3NB12WQ/ref=sr_1_5?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-5"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-2xl px-10 py-4 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
            >
              <span>🛒</span> Comprar en Amazon
            </a>
          </div>

          <div className="flex-1 relative flex justify-center">
            <div className="absolute inset-0 bg-gati-verde/20 rounded-full blur-3xl transform scale-90" />
            <img
              src="/img/GatisauriosLibro.png"
              alt="Libro Gatisaurios con QR"
              className="relative z-10 max-w-sm md:max-w-md w-full transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl -rotate-3 hover:rotate-0"
            />
          </div>

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

      {/* Store Teaser / Banner */}
      <section className="py-24 px-4 relative overflow-hidden mt-12">
        {/* Banner Background with modern gradient and shape */}
        <div className="absolute inset-0 bg-gradient-to-r from-gati-naranja via-orange-400 to-gati-amarillo rounded-[3rem] transform -rotate-1 mx-4 md:mx-12 shadow-2xl" />

        {/* Decorative Overlay Pattern */}
        <div className="absolute inset-0 opacity-10 mx-4 md:mx-12 rounded-[3rem] pointer-events-none bg-[url('/img/GatisauriosFondo.svg')] bg-repeat bg-center" />

        <div className="container mx-auto relative z-10 py-12 md:py-20 px-8 flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <div className="text-center md:text-left max-w-2xl text-white">
            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold tracking-wider mb-6 border border-white/30 uppercase animate-pulse">
              ¡Nueva Colección!
            </div>
            <h2 className="text-5xl md:text-7xl font-chewy mb-6 drop-shadow-lg leading-tight">
              Tienda Mágica
            </h2>
            <p className="text-xl md:text-2xl font-barlow mb-10 font-medium opacity-90 leading-relaxed">
              ¡Llévate a casa un pedacito de magia! Descubre nuestros peluches abrazables, playeras de aventura y tazas encantadas.
            </p>

            <Link
              to="/tienda"
              className="group relative inline-flex items-center gap-4 bg-white text-gati-naranja font-chewy text-2xl px-10 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-orange-50"
            >
              <span>Ir a la Tienda</span>
              <span className="bg-gati-naranja text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition-transform duration-300 group-hover:rotate-45">
                ➜
              </span>
            </Link>
          </div>

          {/* Visual Elements - Floating Products */}
          <div className="relative w-full max-w-md h-[400px] hidden md:block">
            {/* Circle Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-pulse" />

            {/* Floating Items */}
            <div className="absolute top-0 right-10 text-[10rem] animate-float drop-shadow-2xl filter hover:scale-110 transition-transform cursor-pointer">
              🧸
            </div>
            <div className="absolute bottom-10 left-10 text-[8rem] animate-float-delayed drop-shadow-2xl filter hover:scale-110 transition-transform cursor-pointer">
              👕
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] animate-float drop-shadow-xl opacity-80 filter blur-[1px]">
              ✨
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
