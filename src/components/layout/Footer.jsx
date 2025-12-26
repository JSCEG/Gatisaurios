import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-gati-verde text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
            <Link to="/privacidad" className="hover:text-gati-amarillo transition-colors font-mango tracking-wide">
              Aviso de Privacidad
            </Link>
            <Link to="/terminos" className="hover:text-gati-amarillo transition-colors font-mango tracking-wide">
              Términos y Condiciones
            </Link>
            <Link to="/contacto" className="hover:text-gati-amarillo transition-colors font-mango tracking-wide">
              Contacto
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <p className="text-sm font-barlow opacity-80">
              &copy; 2025 Gatisaurios. Hecho con 🐾 y mucho amor.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
