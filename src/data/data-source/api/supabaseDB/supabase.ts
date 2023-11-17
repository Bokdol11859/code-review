import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_API_KEY;

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
