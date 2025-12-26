import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useAuthStore } from '../../store/authStore'

export function Navbar() {
  const { user } = useAuth()
  const { signOut } = useAuthStore()

  return (
    <nav className="bg-white/95 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/img/GatisauriosLogo.svg" 
              alt="Gatisaurios" 
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gati-marron hover:text-gati-verde transition-colors">
              Inicio
            </Link>
            <Link to="/coloring" className="text-gati-marron hover:text-gati-verde transition-colors">
              Colorear
            </Link>
            <Link to="/stories" className="text-gati-marron hover:text-gati-verde transition-colors">
              Cuentos
            </Link>
            <Link to="/game" className="text-gati-marron hover:text-gati-verde transition-colors">
              Juegos
            </Link>
            {user && (
              <Link to="/my-gallery" className="text-gati-marron hover:text-gati-verde transition-colors">
                Mi Galería
              </Link>
            )}
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <img 
                  src={user.user_metadata?.avatar_url} 
                  alt={user.user_metadata?.full_name}
                  className="h-10 w-10 rounded-full"
                />
                <button 
                  onClick={signOut}
                  className="text-gati-marron hover:text-gati-naranja transition-colors"
                >
                  Salir
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn-cta">
                Iniciar Sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
