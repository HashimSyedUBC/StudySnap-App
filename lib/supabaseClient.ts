import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fpcuktdlegfxfoefeyjt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwY3VrdGRsZWdmeGZvZWZleWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0NTg0MzQsImV4cCI6MjAzODAzNDQzNH0.cvaMAWeR4kHaeczP3x3yErlPBa95nGvnGoOq91oLZks'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase