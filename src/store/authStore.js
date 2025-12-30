import { create } from 'zustand'
import { getSupabase } from '../lib/supabase';

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  setUser: (user) => set({ user, loading: false }),

  signInWithGoogle: async () => {
    const supabase = getSupabase();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/coloring`
      }
    })
    if (error) throw error
  },

  signOut: async () => {
    const supabase = getSupabase();
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    set({ user: null })
  },

  checkAuth: async () => {
    const supabase = getSupabase();
    const { data: { user } } = await supabase.auth.getUser();
    set({ user, loading: false });
  }
}))
