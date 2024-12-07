import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vaxuvkamdfhzuiozpdhy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZheHV2a2FtZGZoenVpb3pwZGh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5NTg4MjksImV4cCI6MjAzODUzNDgyOX0.ddd2VI9xbgwcfkmlFhYMNdoYvy_wF2Y6DWGzVlALQCc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
