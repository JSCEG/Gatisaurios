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
        className={`text-gati-marron hover:text-gati-verde transition-all duration-300 font-chewy text-2xl tracking-wide ${mobile ? 'block py-3 hover:bg-gati-bg/50 rounded-xl px-4' : 'hover:-translate-y-1'}`}
        onClick={() => mobile && toggleMenu()}
      >
        Inicio
      </Link>
      <Link 
        to="/coloring" 
        className={`text-gati-marron hover:text-gati-verde transition-all duration-300 font-chewy text-2xl tracking-wide ${mobile ? 'block py-3 hover:bg-gati-bg/50 rounded-xl px-4' : 'hover:-translate-y-1'}`}
        onClick={() => mobile && toggleMenu()}
      >
        Colorear
      </Link>
      <Link 
        to="/stories" 
        className={`text-gati-marron hover:text-gati-verde transition-all duration-300 font-chewy text-2xl tracking-wide ${mobile ? 'block py-3 hover:bg-gati-bg/50 rounded-xl px-4' : 'hover:-translate-y-1'}`}
        onClick={() => mobile && toggleMenu()}
      >
        Cuentos
      </Link>
      <Link 
        to="/tienda" 
        className={`text-gati-marron hover:text-gati-naranja transition-all duration-300 font-chewy text-2xl tracking-wide ${mobile ? 'block py-3 hover:bg-gati-bg/50 rounded-xl px-4' : 'hover:-translate-y-1'}`}
        onClick={() => mobile && toggleMenu()}
      >
        Tienda
      </Link>
      {user && (
        <Link 
          to="/my-gallery" 
          className={`text-gati-marron hover:text-gati-verde transition-all duration-300 font-chewy text-2xl tracking-wide ${mobile ? 'block py-3 hover:bg-gati-bg/50 rounded-xl px-4' : 'hover:-translate-y-1'}`}
          onClick={() => mobile && toggleMenu()}
        >
          Mi Galería
        </Link>
      )}
    </>
  )

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300 border-b border-white/20">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img 
              src="/img/GatisauriosLogo.svg" 
              alt="Gatisaurios" 
              className="h-14 w-auto transform group-hover:scale-110 transition-transform duration-300 filter drop-shadow-sm"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <NavLinks />
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="hidden md:flex items-center gap-4 pl-6 border-l-2 border-gati-marron/10">
                <div className="flex items-center gap-3 bg-white/50 px-3 py-1.5 rounded-full border border-white/40 shadow-sm">
                  <img 
                    src={user.user_metadata?.avatar_url} 
                    alt={user.user_metadata?.full_name}
                    className="h-9 w-9 rounded-full border-2 border-gati-naranja"
                  />
                  <span className="font-barlow text-gati-marron font-medium text-lg hidden lg:block">
                    {user.user_metadata?.full_name?.split(' ')[0]}
                  </span>
                </div>
                <button 
                  onClick={signOut}
                  className="text-gati-marron hover:text-gati-naranja transition-colors font-chewy text-xl hover:scale-105 transform"
                >
                  Salir
                </button>
              </div>
            ) : (
              <Link to="/login" className="hidden md:block btn-primary text-lg px-8 py-2.5 shadow-md hover:shadow-lg">
                Iniciar Sesión
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gati-marron p-2 hover:bg-gati-bg/50 rounded-full transition-colors"
              onClick={toggleMenu}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden pt-6 pb-6 border-t border-gray-100 mt-4 animate-float bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl px-4 absolute left-4 right-4 top-16">
            <div className="flex flex-col gap-2">
              <NavLinks mobile />
            </div>
            
            <div className="mt-6 pt-6 border-t border-gati-marron/10">
              {user ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={user.user_metadata?.avatar_url} 
                      alt={user.user_metadata?.full_name}
                      className="h-12 w-12 rounded-full border-2 border-gati-naranja shadow-sm"
                    />
                    <span className="font-barlow text-gati-marron font-bold text-xl">
                      {user.user_metadata?.full_name}
                    </span>
                  </div>
                  <button 
                    onClick={() => { signOut(); toggleMenu(); }}
                    className="text-gati-marron font-chewy text-xl bg-gati-bg/50 w-full py-3 rounded-xl hover:bg-gati-naranja/10 transition-colors"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              ) : (
                <Link 
                  to="/login" 
                  className="block w-full text-center btn-primary mt-2 shadow-lg"
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
