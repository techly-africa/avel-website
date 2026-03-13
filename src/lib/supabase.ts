import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || supabaseUrl === 'undefined') {
    console.error("CRITICAL: NEXT_PUBLIC_SUPABASE_URL is missing or undefined.");
}

if (!supabaseAnonKey || supabaseAnonKey === 'undefined') {
    console.error("CRITICAL: NEXT_PUBLIC_SUPABASE_ANON_KEY is missing or undefined.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
