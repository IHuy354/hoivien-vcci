import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ImageIcon, Upload, X } from 'lucide-react';
import baseConfig from '@/configs/base';

interface ImagePickerProps {
  savedPath?: string;
  pendingFile?: File | null;
  onFileSelect: (file: File | null) => void;
  onClearSaved: () => void;
}

export function ImagePicker({ savedPath, pendingFile, onFileSelect, onClearSaved }: ImagePickerProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const previewSrc = pendingFile
    ? URL.createObjectURL(pendingFile)
    : savedPath
    ? `${baseConfig.imageDomain}/${savedPath}`
    : null;

  const hasValue = !!(pendingFile || savedPath);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onFileSelect(file);
    e.target.value = '';
  };

  return (
    <div className="flex items-center gap-3">
      <div className="h-24 w-32 rounded-lg border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center flex-shrink-0">
        {previewSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={previewSrc}
            alt="preview"
            className="object-cover w-full h-full"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        ) : (
          <ImageIcon className="h-8 w-8 text-slate-300" />
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="h-4 w-4" />
          {hasValue ? 'Đổi ảnh' : 'Chọn ảnh'}
        </Button>
        {hasValue && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="gap-1.5 text-red-500 hover:text-red-600 hover:bg-red-50 h-7 px-2"
            onClick={() => { onFileSelect(null); onClearSaved(); }}
          >
            <X className="h-3.5 w-3.5" />
            Xóa ảnh
          </Button>
        )}
        {pendingFile && (
          <p className="text-[10px] text-amber-500 font-medium">Chưa lưu — sẽ upload khi nhấn Lưu</p>
        )}
      </div>
    </div>
  );
}
