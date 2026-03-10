import Image from 'next/image';
import baseConfig from '@/configs/base';

export function SponsorLogo({ logoId, name }: { logoId?: string; name?: string }) {
  if (!logoId) {
    return (
      <div className="h-10 w-16 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 text-xs font-medium border border-dashed border-slate-300">
        No logo
      </div>
    );
  }
  return (
    <div className="h-10 w-16 rounded-lg border border-slate-200 bg-white overflow-hidden flex items-center justify-center">
      <Image
        src={`${baseConfig.imageDomain}/${logoId}`}
        alt={name ?? 'logo'}
        width={64}
        height={40}
        className="object-contain w-full h-full p-1"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    </div>
  );
}
