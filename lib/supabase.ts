import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper funkce pro práci s daty
export const getNodes = async (type?: string) => {
  let query = supabase.from('nodes').select('*');

  if (type) {
    query = query.eq('type', type);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching nodes:', error);
    return [];
  }

  return data;
};

export const getNodeBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from('nodes')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching node:', error);
    return null;
  }

  return data;
};

export const getRelatedNodes = async (nodeId: string) => {
  const { data, error } = await supabase
    .from('edges')
    .select(`
      *,
      target:nodes!edges_target_id_fkey(*)
    `)
    .eq('source_id', nodeId);

  if (error) {
    console.error('Error fetching related nodes:', error);
    return [];
  }

  return data;
};

export const getEvents = async () => {
  const { data, error } = await supabase
    .from('nodes')
    .select('*, event_meta(*)')
    .eq('type', 'event')
    .order('event_meta(date)', { ascending: true });

  if (error) {
    console.error('Error fetching events:', error);
    return [];
  }

  return data;
};

export const getInsights = async () => {
  const { data, error } = await supabase
    .from('insights')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching insights:', error);
    return [];
  }

  return data;
};
