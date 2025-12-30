import { useState, useEffect } from 'react'
import { Heart, Shield, Zap, MapPin, Trophy, RefreshCw } from 'lucide-react'

export function GamesPage() {
    const [gameState, setGameState] = useState('character_select') // character_select, map_select, playing, game_over, victory
    const [selectedCharacter, setSelectedCharacter] = useState(null)
    const [lives, setLives] = useState(3)
    const [currentScenario, setCurrentScenario] = useState(null)
    const [score, setScore] = useState(0)

    const characters = [
        {
            id: 'burbujasaurio',
            name: 'Burbujasaurio',
            image: '/img/personajes/burbujasaurio.svg',
            ability: 'Escudo de Burbujas',
            desc: 'Puede flotar sobre el agua y protegerse de caídas.',
            color: 'bg-gati-cielo',
            icon: <Shield size={20} />
        },
        {
            id: 'chefisaurio',
            name: 'Chefisaurio',
            image: '/img/personajes/chefisaurio.svg',
            ability: 'Llamarada Dulce',
            desc: 'Derrite obstáculos de hielo y cocina soluciones rápidas.',
            color: 'bg-gati-naranja',
            icon: <Zap size={20} />
        },
        {
            id: 'rockosaurio',
            name: 'Rockosaurio',
            image: '/img/personajes/rockosaurio.svg',
            ability: 'Onda Sónica',
            desc: 'Rompe rocas y aturde a monstruos gruñones con su guitarra.',
            color: 'bg-gati-morado',
            icon: <Zap size={20} />
        }
    ]

    const zones = [
        {
            id: 'volcan',
            name: 'Volcán de Chocolate',
            difficulty: 'Difícil',
            color: 'bg-red-500',
            scenarios: [
                {
                    id: 1,
                    text: '¡Un río de lava de chocolate bloquea el camino! Está muy caliente.',
                    options: [
                        { text: 'Nadar rápidamente', effect: 'damage', msg: '¡Ay! Te quemaste. -1 Vida.' },
                        { text: 'Usar Escudo de Burbujas', requiredAbility: 'Escudo de Burbujas', effect: 'success', msg: '¡Flotaste sobre la lava! +100 Puntos.' },
                        { text: 'Buscar un puente de galleta', effect: 'neutral', msg: 'Encontraste uno, pero tardaste mucho. +50 Puntos.' }
                    ]
                },
                {
                    id: 2,
                    text: '¡Una lluvia de meteoritos de caramelo!',
                    options: [
                        { text: 'Esquivar corriendo', effect: 'neutral', msg: '¡Uf! Casi te dan. +20 Puntos.' },
                        { text: 'Usar Onda Sónica', requiredAbility: 'Onda Sónica', effect: 'success', msg: '¡Destruiste los caramelos en el aire! +150 Puntos.' },
                        { text: 'Intentar comerlos todos', effect: 'damage', msg: '¡Te dolió la panza! -1 Vida.' }
                    ]
                }
            ]
        },
        {
            id: 'bosque',
            name: 'Bosque de Burbujas',
            difficulty: 'Fácil',
            color: 'bg-gati-verde',
            scenarios: [
                {
                    id: 1,
                    text: 'Una planta dormilona bloquea el sendero.',
                    options: [
                        { text: 'Gritarle fuerte', effect: 'damage', msg: 'Se despertó de mal humor y te picó. -1 Vida.' },
                        { text: 'Usar Llamarada Dulce', requiredAbility: 'Llamarada Dulce', effect: 'success', msg: 'El olor a caramelo la hizo soñar cosas ricas. Se movió. +100 Puntos.' },
                        { text: 'Cantarle una nana', effect: 'success', msg: 'Se durmió más profundamente y te dejó pasar. +80 Puntos.' }
                    ]
                }
            ]
        }
    ]

    const handleCharacterSelect = (char) => {
        setSelectedCharacter(char)
        setGameState('map_select')
    }

    const handleZoneSelect = (zone) => {
        // Pick a random scenario from the zone
        const randomScenario = zone.scenarios[Math.floor(Math.random() * zone.scenarios.length)]
        setCurrentScenario({ ...randomScenario, zoneName: zone.name })
        setGameState('playing')
    }

    const handleOptionClick = (option) => {
        let outcome = option.effect

        // Check ability requirement
        if (option.requiredAbility && selectedCharacter.ability !== option.requiredAbility) {
            outcome = 'fail_ability' // Special fail if you don't have the ability
        }

        if (outcome === 'success') {
            setScore(score + 100)
            alert(option.msg || "¡Éxito!")
            checkWinCondition()
        } else if (outcome === 'neutral') {
            setScore(score + 50)
            alert(option.msg || "Pasaste, pero fue difícil.")
            checkWinCondition()
        } else if (outcome === 'damage' || outcome === 'fail_ability') {
            const msg = outcome === 'fail_ability'
                ? `No tienes la habilidad ${option.requiredAbility}. ¡Fallaste! -1 Vida.`
                : option.msg

            alert(msg)
            setLives(prev => {
                const newLives = prev - 1
                if (newLives <= 0) {
                    setGameState('game_over')
                } else {
                    // Return to map to try another zone or continue
                    setGameState('map_select')
                }
                return newLives
            })
        }
    }

    const checkWinCondition = (currentScore) => {
        if (currentScore >= 200) { // Simple win condition
            setGameState('runner_game') // Go to runner game instead of victory
        } else {
            setGameState('map_select')
        }
    }

    const resetGame = () => {
        setLives(3)
        setScore(0)
        setGameState('character_select')
        setSelectedCharacter(null)
    }

    // Mini-Juego de Correr y Esquivar
    const RunnerGame = ({ onWin, onLose }) => {
        const [playerY, setPlayerY] = useState(0) // 0 es el suelo
        const [isJumping, setIsJumping] = useState(false)
        const [obstacleX, setObstacleX] = useState(100) // Posición X del obstáculo (porcentaje)
        const [gameTime, setGameTime] = useState(0)

        // Gravedad y Salto
        useEffect(() => {
            let jumpInterval
            if (isJumping) {
                let jumpHeight = 0
                let goingUp = true
                jumpInterval = setInterval(() => {
                    if (goingUp) {
                        jumpHeight += 5
                        if (jumpHeight >= 40) goingUp = false // Altura máxima
                    } else {
                        jumpHeight -= 5
                    }

                    setPlayerY(jumpHeight)

                    if (jumpHeight <= 0 && !goingUp) {
                        setPlayerY(0)
                        setIsJumping(false)
                        clearInterval(jumpInterval)
                    }
                }, 50)
            }
            return () => clearInterval(jumpInterval)
        }, [isJumping])

        // Movimiento del Obstáculo y Colisiones
        useEffect(() => {
            const gameLoop = setInterval(() => {
                setObstacleX(prev => {
                    if (prev <= -10) return 100 // Reiniciar obstáculo
                    return prev - 2 // Velocidad del obstáculo
                })
                setGameTime(prev => prev + 1)
            }, 50)

            return () => clearInterval(gameLoop)
        }, [])

        // Detectar Colisión
        useEffect(() => {
            // Si el obstáculo está en la posición del jugador (aprox 10-20%) y el jugador está en el suelo
            if (obstacleX < 20 && obstacleX > 5 && playerY < 10) {
                onLose()
            }
            // Condición de Victoria (sobrevivir cierto tiempo)
            if (gameTime > 200) { // aprox 10 segundos
                onWin()
            }
        }, [obstacleX, playerY, gameTime, onLose, onWin])

        // Controles
        useEffect(() => {
            const handleKeyDown = (e) => {
                if ((e.code === 'Space' || e.code === 'ArrowUp') && !isJumping) {
                    setIsJumping(true)
                }
            }
            window.addEventListener('keydown', handleKeyDown)
            return () => window.removeEventListener('keydown', handleKeyDown)
        }, [isJumping])

        return (
            <div className="relative w-full h-full bg-gradient-to-b from-blue-300 to-blue-100 overflow-hidden rounded-3xl">
                <div className="absolute top-4 left-4 font-chewy text-2xl text-white drop-shadow-md z-10">
                    ¡Corre! Tiempo: {Math.floor(gameTime / 10)}
                </div>

                {/* Suelo */}
                <div className="absolute bottom-0 w-full h-16 bg-green-500 border-t-4 border-green-600"></div>

                {/* Jugador */}
                <div
                    className="absolute left-10 w-16 h-16 transition-all duration-75"
                    style={{ bottom: `${playerY + 64}px` }} // 64px es la altura del suelo
                >
                    <img src={selectedCharacter?.image} alt="Player" className="w-full h-full object-contain" />
                </div>

                {/* Obstáculo */}
                <div
                    className="absolute bottom-16 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-2xl"
                    style={{ left: `${obstacleX}%` }}
                >
                    🔥
                </div>

                {/* Instrucciones */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none opacity-50">
                    <p className="font-chewy text-4xl text-white drop-shadow-lg">¡Salta con Espacio!</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gati-bg py-20 px-4">
            <div className="container mx-auto max-w-5xl">

                {/* Header UI */}
                <div className="flex justify-between items-center mb-8 bg-white/80 p-4 rounded-2xl shadow-sm backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                        <Heart className={`text-red-500 fill-red-500 ${lives < 2 ? 'animate-pulse' : ''}`} />
                        <span className="font-chewy text-2xl text-gati-marron">x {lives}</span>
                    </div>
                    <h1 className="text-3xl font-chewy text-gati-marron hidden md:block">
                        {gameState === 'character_select' ? 'Elige tu Héroe' :
                            gameState === 'map_select' ? 'Elige tu Aventura' :
                                gameState === 'playing' ? '¡Desafío!' : 'Juego Terminado'}
                    </h1>
                    <div className="flex items-center gap-2">
                        <Trophy className="text-yellow-500" />
                        <span className="font-chewy text-2xl text-gati-marron">{score}</span>
                    </div>
                </div>

                {/* Game Area */}
                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden min-h-[60vh] relative border-8 border-gati-verde/20">

                    {/* Character Selection */}
                    {gameState === 'character_select' && (
                        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 h-full place-content-center">
                            {characters.map(char => (
                                <button
                                    key={char.id}
                                    onClick={() => handleCharacterSelect(char)}
                                    className={`group relative p-6 rounded-3xl border-4 border-transparent hover:border-gati-naranja transition-all duration-300 hover:shadow-xl ${char.color}/10 hover:${char.color}/20 text-left`}
                                >
                                    <div className={`w-32 h-32 mx-auto mb-4 rounded-full ${char.color} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
                                        <img src={char.image} alt={char.name} className="w-24 h-24 object-contain" />
                                    </div>
                                    <h3 className="text-2xl font-chewy text-center mb-2 text-gati-marron">{char.name}</h3>
                                    <div className="flex items-center gap-2 justify-center text-sm font-bold text-gati-marron/60 mb-4 uppercase tracking-wider">
                                        {char.icon} {char.ability}
                                    </div>
                                    <p className="text-center font-barlow text-gati-marron/80 leading-tight">{char.desc}</p>
                                </button>
                            ))}

                            {/* Locked Character Slot (CTA) */}
                            <div className="group relative p-6 rounded-3xl border-4 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center text-center opacity-80 hover:opacity-100 transition-opacity">
                                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                                    <span className="text-4xl">🔒</span>
                                </div>
                                <h3 className="text-2xl font-chewy text-gray-400 mb-2">???</h3>
                                <p className="font-barlow text-gray-500 text-sm mb-4">
                                    ¡Regístrate para desbloquear nuevos héroes y habilidades especiales!
                                </p>
                                <a href="/login" className="btn-primary py-2 px-6 text-sm">
                                    Iniciar Sesión
                                </a>
                            </div>
                        </div>
                    )}

                    {/* Map Selection */}
                    {gameState === 'map_select' && (
                        <div className="p-8 flex flex-col items-center justify-center h-full">
                            <h2 className="text-3xl font-chewy text-gati-marron mb-8">¿Dónde quieres ir, {selectedCharacter.name}?</h2>

                            {/* Bonus Level Button (Fallback if auto-trigger fails) */}
                            {score >= 200 && (
                                <button
                                    onClick={() => setGameState('runner_game')}
                                    className="mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-chewy text-2xl py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform animate-bounce"
                                >
                                    🚀 ¡Jugar Nivel Bonus! 🚀
                                </button>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                                {zones.map(zone => (
                                    <button
                                        key={zone.id}
                                        onClick={() => handleZoneSelect(zone)}
                                        className={`h-48 rounded-3xl ${zone.color} text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform relative overflow-hidden group`}
                                    >
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                        <MapPin size={48} className="mb-2 relative z-10" />
                                        <span className="text-3xl font-chewy relative z-10">{zone.name}</span>
                                        <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full mt-2 relative z-10">{zone.difficulty}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Playing Scenario */}
                    {gameState === 'playing' && currentScenario && (
                        <div className="p-8 md:p-16 flex flex-col items-center justify-center h-full text-center animate-in fade-in zoom-in duration-300">
                            <span className="text-sm font-bold text-gati-marron/40 uppercase tracking-widest mb-4">{currentScenario.zoneName}</span>
                            <h2 className="text-3xl md:text-5xl font-chewy text-gati-marron mb-8 leading-tight">
                                {currentScenario.text}
                            </h2>

                            <div className="grid grid-cols-1 gap-4 w-full max-w-2xl">
                                {currentScenario.options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionClick(option)}
                                        className="bg-white border-4 border-gati-bg hover:border-gati-naranja p-6 rounded-2xl text-xl font-barlow font-bold text-gati-marron shadow-sm hover:shadow-md transition-all text-left flex items-center justify-between group"
                                    >
                                        <span>{option.text}</span>
                                        {option.requiredAbility && (
                                            <span className="text-xs bg-gati-morado text-white px-2 py-1 rounded ml-2 opacity-50 group-hover:opacity-100">
                                                Requiere: {option.requiredAbility}
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Runner Game */}
                    {gameState === 'runner_game' && (
                        <RunnerGame
                            onWin={() => setGameState('victory')}
                            onLose={() => {
                                setLives(l => l - 1)
                                if (lives <= 1) { // Will be 0 after update
                                    setGameState('game_over')
                                } else {
                                    alert("¡Cuidado! Perdiste una vida. Inténtalo de nuevo.")
                                    // Restart runner game logic implicitly by re-rendering component
                                    // To force reset, we might need a key or explicit reset, 
                                    // but for now re-mounting should work if state is local to component
                                }
                            }}
                        />
                    )}

                    {/* Game Over */}
                    {gameState === 'game_over' && (
                        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white p-8 text-center">
                            <div className="text-8xl mb-4">😢</div>
                            <h2 className="text-6xl font-chewy mb-4">¡Oh no!</h2>
                            <p className="text-2xl font-barlow mb-8">Te quedaste sin vidas. ¡Pero puedes intentarlo de nuevo!</p>
                            <button onClick={resetGame} className="btn-primary text-2xl py-4 px-12 flex items-center gap-3">
                                <RefreshCw /> Reintentar
                            </button>
                        </div>
                    )}

                    {/* Victory */}
                    {gameState === 'victory' && (
                        <div className="absolute inset-0 bg-gati-amarillo flex flex-col items-center justify-center text-gati-marron p-8 text-center">
                            <div className="text-8xl mb-4 animate-bounce">🏆</div>
                            <h2 className="text-6xl font-chewy mb-4">¡Victoria!</h2>
                            <p className="text-2xl font-barlow mb-8">Has superado los desafíos y eres un verdadero explorador.</p>
                            <div className="bg-white/50 px-8 py-4 rounded-2xl mb-8">
                                <span className="block text-sm uppercase font-bold opacity-60">Puntuación Final</span>
                                <span className="text-6xl font-black">{score}</span>
                            </div>
                            <button onClick={resetGame} className="bg-gati-marron text-white font-chewy text-2xl py-4 px-12 rounded-full hover:scale-105 transition-transform shadow-xl">
                                Jugar Otra Vez
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}
