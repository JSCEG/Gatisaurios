import { createClient } from '@supabase/supabase-js';

let supabase;

export const initSupabase = (supabaseUrl, supabaseAnonKey) => {
  if (!supabase) {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabase;
};

export const getSupabase = () => {
  if (!supabase) {
    throw new Error("Supabase has not been initialized. Call initSupabase first.");
  }
  return supabase;
};

// Helper para obtener el usuario actual
export const getCurrentUser = async () => {
  const supabase = getSupabase();
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error) throw error
  return user
}

// Helper para logout
export const signOut = async () => {
  const supabase = getSupabase();
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}
