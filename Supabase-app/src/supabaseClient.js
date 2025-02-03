import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://asrncizlfdtzcqpnaxaz.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzcm5jaXpsZmR0emNxcG5heGF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1ODIzOTMsImV4cCI6MjA1NDE1ODM5M30.CXOUHmOldjlB5hQ0HWUZDBOh7avmJBJloT3gVMAxCww`
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
