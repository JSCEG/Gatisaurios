import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useAuthStore } from '../../store/authStore'

export function Navbar() {
  const { user } = useAuth()
  const { signOut } = useAuthStore()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const NavLinks = ({ mobile = false }) => (
    <>
      <Link 
        to="/" 
        className={`text-gati-marron hover:text-gati-verde transition-colors font-mango text-xl ${mobile ? 'block py-2' : ''}`}
        onClick={() => mobile && toggleMenu()}
      >
        Inicio
      </Link>
      <Link 
        to="/coloring" 
        className={`text-gati-marron hover:text-gati-verde transition-colors font-mango text-xl ${mobile ? 'block py-2' : ''}`}
        onClick={() => mobile && toggleMenu()}
      >
        Colorear
      </Link>
      <Link 
        to="/stories" 
        className={`text-gati-marron hover:text-gati-verde transition-colors font-mango text-xl ${mobile ? 'block py-2' : ''}`}
        onClick={() => mobile && toggleMenu()}
      >
        Cuentos
      </Link>
      <Link 
        to="/tienda" 
        className={`text-gati-marron hover:text-gati-naranja transition-colors font-mango text-xl ${mobile ? 'block py-2' : ''}`}
        onClick={() => mobile && toggleMenu()}
      >
        Tienda
      </Link>
      {user && (
        <Link 
          to="/my-gallery" 
          className={`text-gati-marron hover:text-gati-verde transition-colors font-mango text-xl ${mobile ? 'block py-2' : ''}`}
          onClick={() => mobile && toggleMenu()}
        >
          Mi Galería
        </Link>
      )}
    </>
  )

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/img/GatisauriosLogo.svg" 
              alt="Gatisaurios" 
              className="h-12 w-auto transform hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="hidden md:flex items-center gap-4">
                <img 
                  src={user.user_metadata?.avatar_url} 
                  alt={user.user_metadata?.full_name}
                  className="h-10 w-10 rounded-full border-2 border-gati-naranja"
                />
                <button 
                  onClick={signOut}
                  className="text-gati-marron hover:text-gati-naranja transition-colors font-mango"
                >
                  Salir
                </button>
              </div>
            ) : (
              <Link to="/login" className="hidden md:block btn-primary text-base px-6 py-2">
                Iniciar Sesión
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gati-marron p-2"
              onClick={toggleMenu}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-gray-100 mt-2 animate-float">
            <NavLinks mobile />
            <div className="mt-4 pt-4 border-t border-gray-100">
              {user ? (
                <div className="flex items-center gap-4 py-2">
                  <img 
                    src={user.user_metadata?.avatar_url} 
                    alt={user.user_metadata?.full_name}
                    className="h-10 w-10 rounded-full border-2 border-gati-naranja"
                  />
                  <button 
                    onClick={() => { signOut(); toggleMenu(); }}
                    className="text-gati-marron font-mango"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              ) : (
                <Link 
                  to="/login" 
                  className="block w-full text-center btn-primary mt-2"
                  onClick={toggleMenu}
                >
                  Iniciar Sesión
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
