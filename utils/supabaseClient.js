import { createClient } from "@supabase/supabase-js";
 
const supabaseUrl = "https://jqmtckuiqbdlokzmqeuj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxbXRja3VpcWJkbG9rem1xZXVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4MTAxMzEsImV4cCI6MjA2NzM4NjEzMX0.UWTdSYd5GqHvf-YeKqC7VLki3852ZwagJGvnZldHNVU";
 
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
 