import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qozpszyrfrpwuaxatvii.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvenBzenlyZnJwd3VheGF0dmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0ODMyNzEsImV4cCI6MjA0NjA1OTI3MX0.ZgU2redae1oJwTJCFfsahDraDlhTrl9dha4sHHDeyPM";
export const supabase = createClient(supabaseUrl, supabaseKey);
