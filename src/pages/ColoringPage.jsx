import { ProtectedRoute } from '../components/auth/ProtectedRoute'

export function ColoringPage() {
  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-center mb-8 text-gati-verde">
          Colorea tu Gatisaurio
        </h1>
        
        <div className="card-glass p-8 max-w-4xl mx-auto">
          <p className="text-center text-gray-700">
            Herramienta de coloreado en construcción...
            <br />
            ¡Próximamente aquí podrás colorear tus Gatisaurios favoritos!
          </p>
        </div>
      </div>
    </ProtectedRoute>
  )
}
