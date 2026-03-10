// @ts-nocheck
import type { PostMetadata } from './postMetadata';

export interface Post {
  id?: string;
  title?: string;
  thumbnail_id?: string;
  external_link?: string;
  content?: string;
  release_at?: string;
  is_active?: boolean;
  release_mode?: string;
  page_config_id?: string;
  created_at?: string;
  created_by?: string;
  updated_at?: string;
  updated_by?: string;
  subtitle?: string;
  icon?: string;
  sort_order?: number;
  metadata?: PostMetadata;
}
