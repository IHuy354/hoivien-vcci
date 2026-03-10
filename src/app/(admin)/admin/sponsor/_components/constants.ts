import { Trophy, Medal, Award } from 'lucide-react';
import type { SponsorMutate } from '@/api/models/sponsorMutate';

export const TIER_OPTIONS = [
  { value: 'main',   label: 'Tài trợ Chính',  color: 'bg-yellow-100 text-yellow-800 border-yellow-300',  icon: Trophy  },
  { value: 'gold',   label: 'Tài trợ Vàng',   color: 'bg-amber-100  text-amber-800  border-amber-300',   icon: Medal   },
  { value: 'silver', label: 'Tài trợ Bạc',    color: 'bg-slate-100  text-slate-700  border-slate-300',   icon: Award   },
];

export const CURRENT_YEAR = new Date().getFullYear();
export const YEAR_OPTIONS = Array.from({ length: 5 }, (_, i) => CURRENT_YEAR - i);
export const PAGE_SIZE = 10;

export const getTierInfo = (tier?: string) => {
  return TIER_OPTIONS.find((t) => t.value === tier) ?? TIER_OPTIONS[2];
};

export const emptyForm = (): SponsorMutate => ({
  name: '',
  logo_id: '',
  website_url: '',
  tier: 'gold',
  year: CURRENT_YEAR,
  sort_order: 0,
  is_active: true,
});
