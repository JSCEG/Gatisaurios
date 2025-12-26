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
      <div className="bg-gati-amarillo/20 py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl text-gati-marron mb-4">Tienda Mágica</h1>
          <p className="text-xl text-gati-marron/80 font-barlow max-w-2xl mx-auto">
            ¡Llévate la magia a casa! Todos nuestros productos apoyan la creación de más cuentos y juegos.
          </p>
        </div>
      </div>

      {/* Grid Productos */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card-glass p-6 flex flex-col group card-hover">
              <div className="bg-white/50 rounded-2xl h-48 flex items-center justify-center mb-4 text-8xl group-hover:scale-110 transition-transform duration-300">
                {product.image}
              </div>
              
              <div className="mb-4">
                <span className="text-sm font-bold text-gati-naranja uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-2xl text-gati-marron mt-1">{product.name}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 flex-grow font-barlow">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-bold text-gati-verde">{product.price}</span>
                <button className="btn-primary px-4 py-2 text-sm">
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner Promocional */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-gati-morado text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl mb-4">¿Buscas algo especial?</h2>
            <p className="text-xl font-barlow mb-8 max-w-2xl mx-auto opacity-90">
              Pronto tendremos ediciones limitadas de todos los Gatisaurios.
              ¡Suscríbete para no perdértelos!
            </p>
            <button className="bg-white text-gati-morado font-mango text-xl px-8 py-3 rounded-full hover:bg-yellow-100 transition-colors">
              Avísame cuando lleguen
            </button>
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
      </div>
    </div>
  )
}
