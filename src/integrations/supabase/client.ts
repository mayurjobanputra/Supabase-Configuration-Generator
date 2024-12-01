import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

declare global {
  interface Window {
    _supabase: ReturnType<typeof createClient<Database>>;
  }
}

// This will be replaced by the dynamic client when configured
export const supabase = {
  get client() {
    if (!window._supabase) {
      throw new Error('Supabase client not configured. Please configure your connection first.');
    }
    return window._supabase;
  }
};