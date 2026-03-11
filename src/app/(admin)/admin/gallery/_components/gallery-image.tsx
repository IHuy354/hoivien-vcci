import { ImageIcon } from 'lucide-react';
import baseConfig from '@/configs/base';

export function GalleryImage({ imagePath, alt }: { imagePath?: string; alt?: string }) {
  if (!imagePath) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
        <ImageIcon className="h-5 w-5" />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${baseConfig.imageDomain}/${imagePath}`}
      alt={alt || 'Gallery Image'}
      className="w-full h-full object-cover transition-transform group-hover:scale-105"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
  );
}
