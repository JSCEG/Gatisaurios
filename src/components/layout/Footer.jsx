export function Footer() {
  return (
    <footer className="bg-gati-verde text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <a href="#" className="hover:text-gati-naranja transition-colors">
              Aviso de Privacidad
            </a>
            <a href="#" className="hover:text-gati-naranja transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="hover:text-gati-naranja transition-colors">
              Contacto
            </a>
          </div>
          <p className="text-sm">
            &copy; 2025 Gatisaurios. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
