// @ts-nocheck
import type { SiteInformationLinkSocials } from './siteInformationLinkSocials';

export interface SiteInformation {
  id?: string;
  code?: string;
  telephone?: string;
  email?: string;
  address?: string;
  working_hours?: string;
  link_socials?: SiteInformationLinkSocials;
  created_at?: string;
  created_by?: string;
  updated_at?: string;
  updated_by?: string;
}
