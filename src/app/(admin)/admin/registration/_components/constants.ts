import { CheckCircle2, Clock, XCircle, AlertCircle } from 'lucide-react';

export const PAGE_SIZE = 10;
export const CURRENT_YEAR = new Date().getFullYear();
export const YEAR_OPTIONS: number[] = Array.from({ length: 6 }, (_, i) => CURRENT_YEAR - i);

export const REGISTRATION_STATUS_OPTIONS = [
  { value: 'pending', label: 'Chờ duyệt', color: 'bg-amber-100 text-amber-700 border-amber-200', icon: Clock },
  { value: 'approved', label: 'Đã duyệt', color: 'bg-emerald-100 text-emerald-700 border-emerald-200', icon: CheckCircle2 },
  { value: 'rejected', label: 'Từ chối', color: 'bg-rose-100 text-rose-700 border-rose-200', icon: XCircle },
];

export function getStatusInfo(status: string) {
    return REGISTRATION_STATUS_OPTIONS.find(s => s.value === status) || 
        { value: status, label: status, color: 'bg-slate-100 text-slate-700 border-slate-200', icon: AlertCircle };
}