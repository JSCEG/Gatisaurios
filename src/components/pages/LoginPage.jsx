import { LoginButton } from '../auth/LoginButton'

export function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="card-glass p-8 text-center">
          <img
            src="/img/GatisauriosLogo.png"
            alt="Gatisaurios"
            className="h-24 w-auto mx-auto mb-6"
          />

          <h1 className="text-3xl mb-4 text-gati-verde">
            ¡Bienvenido a Gatisaurios!
          </h1>

          <p className="text-gray-700 mb-8">
            Inicia sesión para guardar tus dibujos, escuchar cuentos y mucho más
          </p>

          <LoginButton />

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg mb-4 text-gati-marron">
              ¿Qué incluye tu cuenta?
            </h3>
            <ul className="text-left space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-gati-naranja">✓</span>
                Guarda tus dibujos coloreados
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gati-naranja">✓</span>
                Descarga PDFs ilimitados
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gati-naranja">✓</span>
                Acceso a todos los cuentos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gati-naranja">✓</span>
                Juegos y actividades
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
