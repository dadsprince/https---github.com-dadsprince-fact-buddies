import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xyroysdzimxwzrwfzzso.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5cm95c2R6aW14d3pyd2Z6enNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4MDk2MzEsImV4cCI6MjAwNDM4NTYzMX0.hdvKNR8DPY7y7AW2pW0FlHmYASneewPdhl3EVYKnrM8";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
