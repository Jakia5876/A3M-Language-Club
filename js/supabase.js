// supabase.js
// Initialize Supabase Client
const supabaseUrl = CONFIG.SUPABASE_URL;
const supabaseKey = CONFIG.SUPABASE_KEY;
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
