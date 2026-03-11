/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { BusinessOwnerSummary } from './businessOwnerSummary';
import type { BusinessLogoSummary } from './businessLogoSummary';

export interface Business {
  id: string;
  name: string;
  slug: string;
  industry_ids: string[];
  /** @nullable */
  owner_id: BusinessOwnerSummary;
  /** @nullable */
  logo: BusinessLogoSummary;
  /** @nullable */
  rating: number | null;
  /** @nullable */
  address: string | null;
  /** @nullable */
  phone: string | null;
  /** @nullable */
  website: string | null;
  created_at: string;
  /** @nullable */
  created_by?: string | null;
  updated_at: string;
  /** @nullable */
  updated_by?: string | null;
}
