import { useEffect } from 'react'
import { useAuthStore } from '../store/authStore'
import { getSupabase } from '../lib/supabase';

export function useAuth() {
  const { user, loading, setUser, checkAuth } = useAuthStore()

  useEffect(() => {
    // Verificar sesión actual
    checkAuth()

    const supabase = getSupabase();
    // Escuchar cambios en autenticación
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  return { user, loading }
}
