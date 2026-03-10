import { cn } from '@/lib/utils';
import { getTierInfo } from './constants';

export function TierBadge({ tier }: { tier?: string }) {
  const info = getTierInfo(tier);
  const Icon = info.icon;
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border',
        info.color
      )}
    >
      <Icon className="h-3 w-3" />
      {info.label}
    </span>
  );
}
