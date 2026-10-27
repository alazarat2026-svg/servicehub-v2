import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  "";

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Provider = {
  id: string;
  name: string;
  company: string;
  trade: string;
  license?: string;
  bio?: string;
  rating: number;
  review_count: number;
  hourly_rate: number;
  image_url: string;
  location: string;
};

export type Review = {
  id: string;
  provider_id: string;
  author_name: string;
  rating: number;
  content: string;
  created_at: string;
};
