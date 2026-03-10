'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Upload, X, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

import { usePostApiV10FileUpload } from '@/api/endpoints/file';

interface AvatarPickerProps {
  value: string; // The URL to display
  onFileIdChange: (id: string, url: string) => void;
  className?: string;
}

export function AvatarPicker({ value, onFileIdChange, className }: AvatarPickerProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { mutateAsync: uploadFile, isPending: isUploading } = usePostApiV10FileUpload();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        toast.error('Vui lòng chọn file hình ảnh hợp lệ (JPG, PNG, WEBP...)');
        return;
    }
    
    // Giới hạn 2MB cho Avatar
    if (file.size > 2 * 1024 * 1024) {
        toast.error('Kích thước ảnh không được vượt quá 2MB');
        return;
    }

    try {
        const formData = new FormData();
        formData.append('file', file);
    
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const res = await uploadFile({ data: formData as any });
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const uploadedFile = (res as any)?.responseData;
        if (uploadedFile?.id && uploadedFile?.url) {
            onFileIdChange(uploadedFile.id, uploadedFile.url);
            toast.success('Tải ảnh lên thành công');
        } else {
            toast.error('Không nhận được dữ liệu ảnh trả về từ máy chủ');
        }
    } catch (error) {
        console.error('Upload avatar error:', error);
        toast.error('Tải ảnh lên thất bại, vui lòng thử lại');
    }

    if (fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFileIdChange('', '');
  };

  return (
    <div className={cn("relative group w-32 h-32 rounded-full overflow-hidden border-2 border-dashed border-slate-300 hover:border-[#19426D] transition-colors cursor-pointer flex-shrink-0", className)}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         onClick={() => !isUploading && fileInputRef.current?.click()}
    >
        <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*"
            onChange={handleFileChange}
        />
        
        {value ? (
            <>
                <Image src={value} alt="Avatar" fill className="object-cover" />
                {(isHovered || isUploading) && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity">
                        {isUploading ? (
                             <Loader2 className="w-6 h-6 text-white animate-spin" />
                        ) : (
                            <div className="flex gap-2">
                                <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-black/40 rounded-full" onClick={handleClear} disabled={isUploading}>
                                    <X className="w-4 h-4" />
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </>
        ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-400 p-2 text-center">
                 {isUploading ? (
                     <Loader2 className="w-6 h-6 animate-spin text-[#19426D]" />
                 ) : (
                     <>
                        <Upload className="w-6 h-6 mb-2" />
                        <span className="text-[10px] font-medium leading-tight">Tải ảnh lên</span>
                     </>
                 )}
            </div>
        )}
    </div>
  );
}