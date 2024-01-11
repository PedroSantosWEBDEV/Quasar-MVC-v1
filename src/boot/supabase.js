import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://omflczszlatdmlfpwokh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tZmxjenN6bGF0ZG1sZnB3b2toIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5MDY1OTIsImV4cCI6MjAyMDQ4MjU5Mn0.mesM_DeWeJ3WrZYDmX4a_et01LEjAFXFkg4xz0uJ8Vw'
const supabase = createClient(supabaseUrl, supabaseKey)

console.log('init supa', supabase)

export default function useSupabase() {
  return { supabase }
}
