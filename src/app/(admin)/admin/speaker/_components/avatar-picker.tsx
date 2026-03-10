'use client';

import { useRef, useState } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import baseConfig from '@/configs/base';
import { useGetApiV10FileId } from '@/api/endpoints/file';

interface AvatarPickerProps {
  savedId?: string;
  pendingFile?: File | null;
  onFileSelect: (file: File | null) => void;
  onClearSaved: () => void;
  className?: string;
}

export function AvatarPicker({ 
  savedId, 
  pendingFile, 
  onFileSelect, 
  onClearSaved,
  className 
}: AvatarPickerProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Fetch file info từ savedId (chỉ khi savedId có giá trị thực)
  const { data: fileData, isLoading: isLoadingFile } = useGetApiV10FileId(
    savedId || 'skip-api-call', 
    { 
      query: { 
        enabled: !!savedId && savedId.length > 0
      } 
    }
  );

  // Preview URL: ưu tiên local blob, sau đó server URL từ API
  const previewUrl = pendingFile
    ? URL.createObjectURL(pendingFile)
    : savedId && fileData
      ? (() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const file = (fileData as any)?.responseData;
          if (file?.path) {
            return `${baseConfig.imageDomain}/${file.path}`;
          }
          return null;
        })()
      : null;

  // const hasValue = !!(pendingFile || savedId);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Vui lòng chọn file hình ảnh hợp lệ (JPG, PNG, WEBP...)');
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      toast.error('Kích thước ảnh không được vượt quá 2MB');
      return;
    }

    onFileSelect(file);
    
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFileSelect(null);
    onClearSaved();
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div 
        className={cn(
          "relative group w-32 h-32 rounded-full overflow-hidden border-2 border-dashed border-slate-300 hover:border-[#19426D] transition-colors cursor-pointer flex-shrink-0",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => fileInputRef.current?.click()}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*"
          onChange={handleFileChange}
        />
        
        {isLoadingFile && savedId && !pendingFile ? (
          <div className="w-full h-full flex items-center justify-center bg-slate-50">
            <Loader2 className="w-6 h-6 animate-spin text-slate-400" />
          </div>
        ) : previewUrl ? (
          <>
            <img src={previewUrl} alt="Avatar" className="w-full h-full object-cover" />
            {isHovered && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity">
                <div className="flex gap-2">
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="h-8 w-8 text-white hover:bg-black/40 rounded-full" 
                    onClick={handleClear}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-400 p-2 text-center">
            <Upload className="w-6 h-6 mb-2" />
            <span className="text-[10px] font-medium leading-tight">Tải ảnh lên</span>
          </div>
        )}
      </div>
      
      {pendingFile && (
        <p className="text-[10px] text-amber-500 font-medium text-center">
          Chưa lưu — sẽ upload khi nhấn Lưu
        </p>
      )}
    </div>
  );
}