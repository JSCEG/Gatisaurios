import { useAuthStore } from '../../store/authStore'
import { LogIn } from 'lucide-react'

export function LoginButton() {
  const { signInWithGoogle } = useAuthStore()

  const handleLogin = async () => {
    try {
      await signInWithGoogle()
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
      alert('Error al iniciar sesión con Google')
    }
  }

  return (
    <button onClick={handleLogin} className="btn-primary group relative overflow-hidden">
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      <span className="relative flex items-center gap-3">
        <LogIn className="w-6 h-6" />
        Entra y diviértete
      </span>
    </button>
  )
}
