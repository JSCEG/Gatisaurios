import { LoginButton } from '../components/auth/LoginButton'

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <img 
          src="/img/GatisauriosTitulo.svg" 
          alt="Gatisaurios - Para Colorear" 
          className="max-w-4xl w-full mx-auto mb-8"
        />
        <LoginButton />
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl text-center text-gati-marron mb-12">
          ¿Qué puedes hacer?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-glass p-8 text-center">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-2xl mb-4 text-gati-verde">Colorear</h3>
            <p className="text-gray-700">
              Colorea tus Gatisaurios favoritos en línea y guarda tus creaciones
            </p>
          </div>

          <div className="card-glass p-8 text-center">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl mb-4 text-gati-verde">Cuentos</h3>
            <p className="text-gray-700">
              Escucha historias mágicas de tus personajes favoritos
            </p>
          </div>

          <div className="card-glass p-8 text-center">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-2xl mb-4 text-gati-verde">Juegos</h3>
            <p className="text-gray-700">
              Diviértete con aventuras interactivas de Gatisaurios
            </p>
          </div>
        </div>
      </section>

      {/* Characters Preview */}
      <section className="bg-white/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center text-gati-marron mb-12">
            Conoce a los Gatisaurios
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['chefisaurio', 'lectosaurio', 'zensaurio', 'burbujasaurio'].map((character) => (
              <div key={character} className="card-glass p-6 text-center">
                <img 
                  src={`/img/personajes/${character}.svg`}
                  alt={character}
                  className="w-full h-auto mb-4"
                />
                <h4 className="text-xl capitalize">{character}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
