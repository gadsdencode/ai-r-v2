import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://elwdsvqoxutmgqxsarut.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsd2RzdnFveHV0bWdxeHNhcnV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQzMTUxNDQsImV4cCI6MTk5OTg5MTE0NH0.Q72UzFg5eQj1qf0eC_uV8PUGbDcWHl7fLOkMHgMCcB4"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase