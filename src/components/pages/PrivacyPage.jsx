export function PrivacyPage() {
  return (
    <div className="min-h-screen container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto card-glass p-8 md:p-12">
        <h1 className="text-5xl text-center text-gati-marron mb-8">Aviso de Privacidad</h1>
        
        <div className="prose prose-lg max-w-none font-barlow text-gray-700">
          <p className="mb-4">
            Última actualización: Diciembre 2025
          </p>
          
          <h3 className="text-2xl text-gati-marron font-mango mt-8 mb-4">1. Información que Recopilamos</h3>
          <p>
            En Gatisaurios, nos tomamos muy en serio la privacidad de los niños y sus familias. 
            Solo recopilamos la información necesaria para proporcionar nuestros servicios, como:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Información de perfil básica (nombre, avatar) al iniciar sesión con Google.</li>
            <li>Dibujos guardados en tu galería personal.</li>
          </ul>

          <h3 className="text-2xl text-gati-marron font-mango mt-8 mb-4">2. Uso de la Información</h3>
          <p>
            Utilizamos tu información únicamente para:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Permitirte guardar y acceder a tus dibujos.</li>
            <li>Mejorar la experiencia de juego y aprendizaje.</li>
          </ul>

          <h3 className="text-2xl text-gati-marron font-mango mt-8 mb-4">3. Protección de Datos</h3>
          <p>
            Tus datos están seguros con nosotros. No compartimos información personal con terceros 
            sin tu consentimiento explícito.
          </p>
        </div>
      </div>
    </div>
  )
}
