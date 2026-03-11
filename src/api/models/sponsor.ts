/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export interface Sponsor {
  id?: string;
  name?: string;
  logo_id?: string;
  website_url?: string;
  tier?: string;
  year?: number;
  sort_order?: number;
  is_active?: boolean;
  created_at?: string;
  created_by?: string;
  updated_at?: string;
  updated_by?: string;
  logo?: {
    id?: string;
    path?: string;
    original?: string;
    mime?: string;
  };
}
