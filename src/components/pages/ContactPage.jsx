export function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('¡Gracias por tu mensaje! Te responderemos pronto.')
  }

  return (
    <div className="min-h-screen container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl text-center text-gati-marron mb-8">Contáctanos</h1>
        <p className="text-xl text-center text-gati-marron/80 mb-12">
          ¿Tienes alguna pregunta sobre los Gatisaurios? ¡Nos encantaría escucharte!
        </p>

        <div className="card-glass p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xl text-gati-marron mb-2 font-mango">
                Tu Nombre
              </label>
              <input 
                type="text" 
                id="name"
                required
                className="input-field"
                placeholder="Ej. Juan Pérez"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xl text-gati-marron mb-2 font-mango">
                Tu Correo Electrónico
              </label>
              <input 
                type="email" 
                id="email"
                required
                className="input-field"
                placeholder="juan@ejemplo.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xl text-gati-marron mb-2 font-mango">
                Mensaje
              </label>
              <textarea 
                id="message"
                required
                rows="5"
                className="input-field resize-none"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full text-xl py-4">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
