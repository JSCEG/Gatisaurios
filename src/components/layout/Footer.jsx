import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <div className="mt-auto relative">
      {/* Grass Effect Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[70px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#FFFFFF"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="#FFFFFF"
            opacity=".5"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>

      {/* Main Footer with Grass Texture/Gradient */}
      <footer className="bg-gradient-to-b from-gati-verde to-green-600 text-white pt-12 pb-8 relative z-10">
        
        {/* Decoraciones de Pasto (Pseudo-elementos simulados) */}
        <div className="absolute top-0 left-0 w-full h-8 -mt-4 flex justify-around opacity-40 pointer-events-none overflow-hidden">
          {/* Pequeños 'pelitos' de pasto generados visualmente */}
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-4 h-8 bg-gati-verde rounded-t-full transform rotate-45 origin-bottom-left" style={{ 
              transform: `rotate(${Math.random() * 60 - 30}deg) scale(${0.8 + Math.random() * 0.5})` 
            }} />
          ))}
        </div>

        {/* Decoraciones: Flores y Hongos */}
        <div className="absolute -top-6 left-[10%] text-2xl animate-bounce" style={{ animationDuration: '3s' }}>🌼</div>
        <div className="absolute -top-4 left-[25%] text-xl animate-bounce" style={{ animationDuration: '4s' }}>🍄</div>
        <div className="absolute -top-5 right-[15%] text-2xl animate-bounce" style={{ animationDuration: '3.5s' }}>🌸</div>
        <div className="absolute -top-3 right-[30%] text-xl animate-bounce" style={{ animationDuration: '4.5s' }}>🌿</div>

        <div className="container mx-auto px-4 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
              <Link to="/privacidad" className="hover:text-gati-amarillo transition-colors font-chewy text-xl tracking-wide flex items-center gap-2 group">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">🍃</span>
                Aviso de Privacidad
              </Link>
              <Link to="/terminos" className="hover:text-gati-amarillo transition-colors font-chewy text-xl tracking-wide flex items-center gap-2 group">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">🍃</span>
                Términos y Condiciones
              </Link>
              <Link to="/contacto" className="hover:text-gati-amarillo transition-colors font-chewy text-xl tracking-wide flex items-center gap-2 group">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">🍃</span>
                Contacto
              </Link>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex gap-4 mb-2">
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors text-2xl" title="Facebook">📘</a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors text-2xl" title="Instagram">📸</a>
              </div>
              <p className="text-sm font-barlow opacity-90 font-medium text-center md:text-right">
                © 2025 Gatisaurios. <br className="md:hidden"/> Hecho con 🐾 y mucho amor.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
