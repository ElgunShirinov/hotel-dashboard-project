import { createClient } from "@supabase/supabase-js";
import { supabaseSecretKey, supabaseUrlLink } from "../supabaseDetails";
export const supabaseUrl = supabaseUrlLink;
const supabaseKey = supabaseSecretKey;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
