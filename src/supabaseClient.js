import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://payyueojyfnyounancif.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBheXl1ZW9qeWZueW91bmFuY2lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMDY4MzAsImV4cCI6MjA2Mzc4MjgzMH0.q9on6_4KTfiY95DtcHuBk2RIuOWxEl9xNCyGs3R2w8Y";

export const supabase = createClient(supabaseUrl, supabaseKey);
