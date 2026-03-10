/* eslint-disable */

export interface Sponsor {
  id?: string;
  name?: string;
  logo: SponsorLogo;
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
}
export interface SponsorLogo {
 id:string;
mime: string;
original: string;
path:string;
}
