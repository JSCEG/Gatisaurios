import { MagicalMap } from '../home/MagicalMap'

export function MundoGatisaurioPage() {
    const characters = [
        { name: 'Burbujasaurio', img: '/img/personajes/burbujasaurio.svg', desc: '¡Le encantan las burbujas mágicas!', color: 'text-gati-cielo' },
        { name: 'Chefisaurio', img: '/img/personajes/chefisaurio.svg', desc: 'Cocina las galletas más ricas.', color: 'text-gati-naranja' },
        { name: 'Escobasaurio', img: '/img/personajes/escobasaurio.svg', desc: 'Mantiene todo limpio y brillante.', color: 'text-gati-verde' },
        { name: 'Lectosaurio', img: '/img/personajes/lectosaurio.svg', desc: 'Devora libros y cuenta historias.', color: 'text-gati-azul' },
        { name: 'Magosaurio', img: '/img/galeria/Magosaurio.png', desc: '¡Hace trucos sorprendentes!', color: 'text-gati-morado' },
        { name: 'Michizzaurio', img: '/img/galeria/Michizzaurio.png', desc: 'El rey de las fiestas de pizza.', color: 'text-gati-amarillo' },
        { name: 'Pintasaurio', img: '/img/galeria/Pintasaurio.png', desc: 'Llena el mundo de colores.', color: 'text-gati-naranja' },
        { name: 'Rockosaurio', img: '/img/personajes/rockosaurio.svg', desc: '¡Toca la guitarra todo el día!', color: 'text-gati-morado' },
        { name: 'Rodasaurio', img: '/img/personajes/rodasaurio.svg', desc: 'El más veloz sobre ruedas.', color: 'text-gati-azul' },
        { name: 'Trapesasaurio', img: '/img/personajes/trapesaurio.svg', desc: 'Acrobacias son su pasión.', color: 'text-gati-verde' },
        { name: 'Zensaurio', img: '/img/personajes/zensaurio.svg', desc: 'Paz y tranquilidad siempre.', color: 'text-gati-cielo' },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex flex-col items-center justify-center p-4 overflow-hidden bg-gradient-to-b from-gati-cielo/20 to-gati-amarillo/20">
                <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px] pointer-events-none" />

                <div className="z-10 text-center relative">
                    <h1 className="text-5xl md:text-7xl text-gati-marron font-chewy mb-6 tracking-wider drop-shadow-lg">
                        🌍 Mundo Gatisaurio
                    </h1>
                    <p className="text-2xl md:text-3xl text-gati-marron/80 font-barlow mb-8 max-w-2xl mx-auto">
                        Conoce a todos los personajes mágicos de nuestro universo
                    </p>
                </div>
            </section>

            {/* Characters Gallery Section */}
            <section className="py-24 px-0 relative">
                <div className="container mx-auto px-4 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <h2 className="text-mango-title text-center md:text-left">
                        Conoce a la Manada
                    </h2>
                    <div className="hidden md:flex gap-2 text-gati-marron/60 font-barlow text-lg animate-pulse">
                        <span>← Desliza para ver más →</span>
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="w-full overflow-x-auto pb-12 pt-4 px-4 md:px-0 scrollbar-hide snap-x snap-mandatory">
                    <div className="flex gap-6 md:gap-8 w-max px-4 md:px-8">
                        {characters.map((char, index) => (
                            <div
                                key={char.name}
                                className="snap-center shrink-0 w-[280px] md:w-[320px] card-glass p-6 text-center group relative overflow-hidden transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl bg-white/40"
                            >
                                {/* Background Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-${char.color.replace('text-', '')}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="h-64 w-full flex items-center justify-center mb-6 relative z-10">
                                    <img
                                        src={char.img}
                                        alt={char.name}
                                        className="max-h-full w-auto object-contain transform group-hover:scale-115 group-hover:rotate-3 transition-transform duration-500 filter drop-shadow-xl"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="relative z-10">
                                    <h4 className={`text-3xl ${char.color} mb-3 font-chewy tracking-wide`}>{char.name}</h4>
                                    <p className="text-gati-marron/80 font-barlow text-lg font-medium leading-tight px-2">
                                        {char.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="py-24 px-4 bg-gati-verde/5 relative overflow-hidden">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl md:text-5xl text-gati-marron font-chewy mb-12 text-center">
                        La Manada de Gatisaurios
                    </h2>

                    <div className="prose prose-lg max-w-none text-gati-marron/80 font-barlow space-y-6">
                        <p className="text-xl leading-relaxed">
                            Cada Gatisaurio tiene una personalidad única y especial. Desde Burbujasaurio con sus mágicas burbujas, hasta Rockosaurio tocando la guitarra, todos ellos viven juntos en un mundo lleno de aventuras y diversión.
                        </p>

                        <p className="text-xl leading-relaxed">
                            Nuestros personajes representan diferentes valores y habilidades que inspiran a los niños a explorar sus propias pasiones. Ya sea colorear, contar historias, o simplemente pasar un buen rato, cada Gatisaurio tiene algo especial que enseñar.
                        </p>

                        <p className="text-xl leading-relaxed">
                            ¿Cuál es tu Gatisaurio favorito? ¡Cada uno está listo para llevarte en una aventura mágica llena de colores, diversión y aprendizaje!
                        </p>
                    </div>
                </div>
            </section>

            {/* Magical Map Section */}
            <MagicalMap />
        </div>
    )
}
