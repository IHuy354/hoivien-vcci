import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ImageIcon, Upload, X } from 'lucide-react';
import baseConfig from '@/configs/base';

interface LogoPickerProps {
  /** ID đã lưu (khi edit sponsor cũ) */
  savedId?: string;
  /** File đang chờ upload (chưa submit) */
  pendingFile?: File | null;
  onFileSelect: (file: File | null) => void;
  onClearSaved: () => void;
}

export function LogoPicker({ savedId, pendingFile, onFileSelect, onClearSaved }: LogoPickerProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Preview: ưu tiên local blob URL, fallback ID đã lưu
  const previewSrc = pendingFile
    ? URL.createObjectURL(pendingFile)
    : savedId
    ? `${baseConfig.imageDomain}/${savedId}`
    : null;

  const hasValue = !!(pendingFile || savedId);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onFileSelect(file);
    e.target.value = '';
  };

  return (
    <div className="flex items-center gap-3">
      {/* Preview */}
      <div className="h-16 w-24 rounded-lg border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center flex-shrink-0">
        {previewSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={previewSrc}
            alt="logo preview"
            className="object-contain w-full h-full p-1"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        ) : (
          <ImageIcon className="h-7 w-7 text-slate-300" />
        )}
      </div>

      {/* Actions */}
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
