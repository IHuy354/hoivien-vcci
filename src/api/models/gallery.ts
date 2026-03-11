/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export interface Gallery {
  id?: string;
  title?: string;
  description?: string;
  image_id?: string;
  category?: string;
  year?: number;
  sort_order?: number;
  is_active?: boolean;
  created_at?: string;
  created_by?: string;
  updated_at?: string;
  updated_by?: string;
  image?: {
    id?: string;
    path?: string;
    original?: string;
    mime?: string;
  };
  categories?: Array<{
    id?: string;
    name?: string;
    slug?: string;
    type?: string;
    url?: string;
  }>;
}
