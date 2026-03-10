// @ts-nocheck

export interface BusinessCreate {
  name: string;
  /** @nullable */
  slug?: string | null;
  industry_ids?: string[];
  /** @nullable */
  owner_id?: string | null;
  /** @nullable */
  logo_id?: string | null;
  /** @nullable */
  rating?: number | null;
  /** @nullable */
  address?: string | null;
  /** @nullable */
  phone?: string | null;
  /** @nullable */
  website?: string | null;
}
