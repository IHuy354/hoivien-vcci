'use client';

import { useRef, useState } from 'react';
import { Upload, X, Loader2, ImageIcon } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { usePostApiV10FileUpload } from '@/api/endpoints/file';
import baseConfig from '@/configs/base';

interface ImageSettingFieldProps {
  label: string;
  description?: string;
  keyName: string;
  filePath: string; // Store the path directly, not ID
  onFilePathChange: (filePath: string) => void;
}

export function ImageSettingField({
  label,
  description,
  keyName,
  filePath,
  onFilePathChange,
}: ImageSettingFieldProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  
  const { mutateAsync: uploadFile, isPending: isUploading } = usePostApiV10FileUpload();

  // Build image URL: use local preview or the stored path directly
  const imageUrl = previewUrl || (filePath ? `${baseConfig.imageDomain}/${filePath}` : '');



  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Vui lòng chọn file hình ảnh hợp lệ (JPG, PNG, WEBP...)');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Kích thước ảnh không được vượt quá 5MB');
      return;
    }

    // Show local preview immediately
    const localUrl = URL.createObjectURL(file);
    setPreviewUrl(localUrl);

    try {
    
      const res = await uploadFile({
        data: { 
          file, 
          original: file.name, 
          compress: true 
        },
      });



      const uploadedFile = (res as { responseData?: { id?: string; path?: string } })
        ?.responseData;

      if (uploadedFile?.path) {

        
        // Save the file PATH instead of ID
        onFilePathChange(uploadedFile.path);
        
        // Clear local preview since we now have the server path
        setPreviewUrl('');
        
        toast.success('Tải ảnh lên thành công');
      } else {
        console.error('❌ No file path in response:', res);
        toast.error('Không nhận được đường dẫn ảnh từ máy chủ');
        setPreviewUrl('');
      }
    } catch (error) {
      console.error('❌ Upload image error:', error);
      const errorMsg = (error as { response?: { data?: { message?: string } } })
        ?.response?.data?.message || 'Tải ảnh lên thất bại, vui lòng thử lại';
      toast.error(errorMsg);
      setPreviewUrl('');
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClear = () => {
    onFilePathChange('');
    setPreviewUrl('');
    toast.info('Đã xóa ảnh');
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label className="text-base font-medium">{label}</Label>
        <code className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
          {keyName}
        </code>
      </div>
      
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}

      <div className="flex items-start gap-4">
        {/* Preview Area */}
        <div className="relative h-32 w-48 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 overflow-hidden flex items-center justify-center flex-shrink-0">
          {imageUrl ? (
            <>
              {/* Use regular img tag for better compatibility */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt={label}
                className="object-contain w-full h-full p-2"
                onError={(e) => {
                  console.error('Failed to load image:', imageUrl);
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </>
          ) : (
            <ImageIcon className="h-12 w-12 text-slate-300" />
          )}

          {/* Loading Overlay */}
          {isUploading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Loader2 className="h-8 w-8 text-white animate-spin" />
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2 pt-1">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
            disabled={isUploading}
          />
          
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="gap-2"
          >
            <Upload className="h-4 w-4" />
            {imageUrl ? 'Đổi ảnh' : 'Chọn ảnh'}
          </Button>

          {imageUrl && !isUploading && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="gap-2 text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              <X className="h-4 w-4" />
              Xóa ảnh
            </Button>
          )}

          <p className="text-[11px] text-muted-foreground mt-1">
            JPG, PNG, WEBP • Tối đa 5MB
          </p>
        </div>
      </div>
    </div>
  );
}
