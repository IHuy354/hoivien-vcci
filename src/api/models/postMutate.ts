// @ts-nocheck
import type { PostMutateMetadata } from './postMutateMetadata';

export interface PostMutate {
  title?: string;
  thumbnail_id?: string;
  external_link?: string;
  content?: string;
  release_at?: string;
  is_active?: boolean;
  release_mode?: string;
  page_config_id?: string;
  subtitle?: string;
  icon?: string;
  sort_order?: number;
  metadata?: PostMutateMetadata;
}
