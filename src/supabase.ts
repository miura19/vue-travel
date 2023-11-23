import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    "https://badmbzrlscwpbxdbwvtu.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhZG1ienJsc2N3cGJ4ZGJ3dnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2NTI4NTAsImV4cCI6MjAxNjIyODg1MH0.pg6FGAWCY3GYS73XrWVpBg2ZUsDxXTBXnUrCi2EaTs8"
  );