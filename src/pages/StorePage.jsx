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
      <div className="relative py-20 px-4 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gati-amarillo/20 via-gati-naranja/10 to-gati-amarillo/20 animate-pulse" />

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl text-gati-marron mb-6 font-chewy drop-shadow-sm">Tienda Mágica</h1>
          <p className="text-xl md:text-2xl text-gati-marron/80 font-barlow max-w-2xl mx-auto font-medium leading-relaxed">
            ¡Llévate la magia a casa! Todos nuestros productos apoyan la creación de más cuentos y juegos.
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
                <span className="text-sm font-bold text-gati-naranja uppercase tracking-wider bg-gati-naranja/10 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <h3 className="text-3xl text-gati-marron mt-3 font-chewy tracking-wide">{product.name}</h3>
              </div>

              <p className="text-gati-marron/70 mb-6 flex-grow font-barlow text-lg font-medium leading-tight">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-auto relative z-10 pt-4 border-t border-gati-marron/5">
                <span className="text-3xl font-bold text-gati-verde font-chewy">{product.price}</span>
                <button className="btn-primary px-6 py-2 text-lg shadow-md hover:shadow-xl">
                  Ver Detalles
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
    </div>
  )
}
