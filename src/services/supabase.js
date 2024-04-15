import { createClient } from '@supabase/supabase-js';
//import 'dotenv/config';

// const supabaseUrl = import.meta.env.VITE.SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE.process.env.SUPABASE_KEY;
const supabaseUrl = 'https://htueppwoflshvwwwrhct.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0dWVwcHdvZmxzaHZ3d3dyaGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMDEzODYsImV4cCI6MjAyODY3NzM4Nn0.qeZRRNkjIuN_DsW5E3CKLc2FHjN8gDdcm1TNuA3Fmn0';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
