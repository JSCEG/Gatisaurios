export function StorePage() {
  const products = [
    {
      id: 1,
      name: 'Taza Aventurera',
      price: '$250 MXN',
      image: '☕',
      category: 'Accesorios',
      description: 'Perfecta para tu chocolate caliente.'
    },
    {
      id: 2,
      name: 'Playera Explorador',
      price: '$350 MXN',
      image: '👕',
      category: 'Ropa',
      description: '100% Algodón para tus aventuras.'
    },
    {
      id: 3,
      name: 'Peluche Burbujasaurio',
      price: '$450 MXN',
      image: '🧸',
      category: 'Peluches',
      description: 'El compañero más suave y abrazable.'
    },
    {
      id: 4,
      name: 'Kit de Colorear',
      price: '$150 MXN',
      image: '🖍️',
      category: 'Arte',
      description: 'Incluye libro y crayones mágicos.'
    }
  ]

  return (
    <div className="min-h-screen bg-gati-bg">
      {/* Hero Tienda */}
      <div className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-gati-morado/20 via-gati-amarillo/10 to-gati-naranja/10">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 text-6xl animate-bounce-slow opacity-60">🛍️</div>
        <div className="absolute top-40 right-20 text-6xl animate-pulse opacity-60">🎁</div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gati-naranja/20 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute top-40 -left-20 w-72 h-72 bg-gati-amarillo/30 rounded-full blur-3xl mix-blend-multiply" />

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block px-6 py-2 bg-gati-morado/10 rounded-full text-gati-morado font-bold tracking-widest uppercase mb-4 animate-fade-in">
            Mercado Oficial
          </div>
          <h1 className="text-mango-title mb-8">Tienda Mágica</h1>
          <p className="text-2xl text-gati-marron/80 font-barlow max-w-2xl mx-auto font-medium leading-relaxed">
            ¡Llévate la magia a casa! <br />
            <span className="text-gati-naranja">Cada tesoro apoya nuevas aventuras.</span>
          </p>
        </div>
      </div>

      {/* Grid Productos */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card-glass p-6 flex flex-col group card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/40 to-transparent rounded-bl-full z-0 transition-transform duration-500 group-hover:scale-150" />

              <div className="bg-white/50 rounded-2xl h-64 flex items-center justify-center mb-6 text-9xl group-hover:scale-105 transition-transform duration-500 shadow-inner relative z-10">
                {product.image}
              </div>

              <div className="mb-4 relative z-10">
                <span className="inline-block text-xs font-black text-gati-naranja uppercase tracking-wider bg-gati-naranja/10 px-4 py-1.5 rounded-full mb-2">
                  {product.category}
                </span>
                <h3 className="text-3xl text-gati-marron font-chewy tracking-wide leading-none">{product.name}</h3>
              </div>

              <p className="text-gati-marron/70 mb-8 flex-grow font-barlow text-lg font-medium leading-tight">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-auto relative z-10 pt-6 border-t-2 border-dashed border-gati-marron/10">
                <span className="text-4xl font-bold text-gati-verde font-chewy">{product.price}</span>
                <button className="btn-primary px-6 py-2 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner Promocional */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-gati-morado to-purple-600 text-white rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-mango-title mb-6">¿Buscas algo especial?</h2>
            <p className="text-xl md:text-2xl font-barlow mb-10 max-w-2xl mx-auto opacity-90 font-medium">
              Pronto tendremos ediciones limitadas de todos los Gatisaurios.
              ¡Suscríbete para no perdértelos!
            </p>
            <button className="bg-white text-gati-morado font-chewy text-2xl px-10 py-4 rounded-full shadow-lg hover:bg-yellow-100 hover:scale-105 transition-all duration-300 ring-4 ring-white/30">
              Avísame cuando lleguen
            </button>
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl animate-pulse delay-700" />
        </div>
      </div>

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
    </div>
  )
}
