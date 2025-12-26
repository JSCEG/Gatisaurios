import { useState, useRef, useEffect } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { Download, RotateCcw, X, Palette } from 'lucide-react'

export function ColoringCanvas({ svgUrl, onClose, title = "Mi Obra Maestra" }) {
  const [selectedColor, setSelectedColor] = useState('#FF5722') // Gati Naranja default
  const [svgContent, setSvgContent] = useState('')
  const [history, setHistory] = useState([]) // Para deshacer (opcional, pero cool)
  const containerRef = useRef(null)

  const colors = [
    '#FFFFFF', '#000000', // Blanco y Negro
    '#FF5722', '#FF9800', '#FFC107', // Naranjas y Amarillos
    '#4CAF50', '#8BC34A', '#CDDC39', // Verdes
    '#2196F3', '#03A9F4', '#00BCD4', // Azules
    '#9C27B0', '#673AB7', '#E91E63', // Morados y Rosas
    '#795548', '#8D6E63', '#A1887F', // Marrones
  ]

  useEffect(() => {
    // Cargar el SVG
    fetch(svgUrl)
      .then(res => res.text())
      .then(data => {
        // Limpiar el SVG de scripts maliciosos si fuera necesario, aquí confiamos en el source
        // Asegurar que el SVG tenga width y height al 100%
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'image/svg+xml')
        const svgElement = doc.querySelector('svg')
        if (svgElement) {
          svgElement.setAttribute('width', '100%')
          svgElement.setAttribute('height', '100%')
          svgElement.style.width = '100%'
          svgElement.style.height = '100%'
          setSvgContent(svgElement.outerHTML)
        }
      })
      .catch(err => console.error("Error loading SVG:", err))
  }, [svgUrl])

  const handleSvgClick = (e) => {
    // Verificar si el elemento clickeado es un path, rect, circle, etc.
    const target = e.target
    const tag = target.tagName.toLowerCase()
    
    if (['path', 'rect', 'circle', 'ellipse', 'polygon', 'polyline'].includes(tag)) {
      // Evitar colorear líneas negras (bordes) si se desea
      const stroke = target.getAttribute('stroke')
      const fill = target.getAttribute('fill')
      
      // Lógica simple: Si tiene fill o es blanco/transparente, lo coloreamos
      // Ignoramos si es un elemento puramente de trazo negro (opcional)
      
      target.style.fill = selectedColor
      target.setAttribute('fill', selectedColor)
    }
  }

  const handleDownload = async () => {
    if (!containerRef.current) return

    try {
      const canvas = await html2canvas(containerRef.current, {
        backgroundColor: '#ffffff',
        scale: 2 // Mejor calidad
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('l', 'mm', 'a4') // Landscape, milímetros, A4
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save(`Gatisaurios-${title}.pdf`)
    } catch (err) {
      console.error("Error generating PDF:", err)
      alert("Hubo un error al generar tu dibujo. ¡Inténtalo de nuevo!")
    }
  }

  const handleReset = () => {
    if (window.confirm("¿Quieres borrar todo y empezar de nuevo?")) {
        // Recargar el SVG original
        const parser = new DOMParser()
        const doc = parser.parseFromString(svgContent, 'image/svg+xml')
        const svgElement = doc.querySelector('svg')
        if(svgElement) {
             // Resetear fills manualmente si ya estaba renderizado es complejo, 
             // mejor forzar re-renderizado o recargar contenido.
             // Una forma rápida es buscar todos los elementos y ponerles fill white, 
             // pero perderíamos los colores originales si los había.
             // Lo mejor es volver a hacer fetch o guardar el string original en otro estado.
             // Aquí usaremos un truco: forzar update con key o recargar.
             // Simplemente recargamos el contenido original en el DOM.
             document.getElementById('coloring-area').innerHTML = svgContent
        }
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-6xl h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-500 p-2 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        {/* Toolbar (Mobile: Top, Desktop: Left) */}
        <div className="w-full md:w-64 bg-gray-50 p-6 flex flex-col gap-6 border-r border-gray-200 overflow-y-auto">
          <div className="text-center">
            <h2 className="font-chewy text-3xl text-gati-marron mb-2">Paleta</h2>
            <p className="text-sm text-gray-500 font-barlow">¡Elige un color mágico!</p>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-2 gap-3">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full shadow-sm border-2 transition-transform hover:scale-110 ${
                  selectedColor === color ? 'border-gati-marron scale-110 ring-2 ring-gati-marron/20' : 'border-transparent'
                }`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <div 
              className="w-full h-16 rounded-xl border-4 border-gray-200 flex items-center justify-center mb-4"
              style={{ backgroundColor: selectedColor }}
            >
              <span className="bg-white/80 px-2 py-1 rounded text-xs font-bold uppercase">Color Actual</span>
            </div>

            <button 
              onClick={handleDownload}
              className="btn-primary w-full py-3 text-lg flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Descargar PDF
            </button>
            
            <button 
              onClick={handleReset}
              className="w-full py-3 rounded-xl border-2 border-gray-300 text-gray-600 font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} />
              Reiniciar
            </button>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 bg-gray-100 p-4 md:p-8 flex items-center justify-center overflow-auto relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjY2MiIG9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] opacity-50 pointer-events-none" />
            
            <div 
                ref={containerRef}
                id="coloring-area"
                className="bg-white shadow-xl rounded-xl w-full max-w-3xl aspect-[4/3] relative cursor-crosshair"
                onClick={handleSvgClick}
                dangerouslySetInnerHTML={{ __html: svgContent }}
            />
        </div>

      </div>
    </div>
  )
}
