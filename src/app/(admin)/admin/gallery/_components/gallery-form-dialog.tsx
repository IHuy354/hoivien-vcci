import { useState, useMemo } from 'react';
import { toast } from 'sonner';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

import type { GalleryMutate } from '@/api/models/galleryMutate';
import type { Gallery } from '@/api/models/gallery';
import type { Category } from '@/api/models/category';
import { usePostApiV10FileUpload } from '@/api/endpoints/file';
import { useGetApiV10Category } from '@/api/endpoints/category';

import { ImagePicker } from './image-picker';

const CURRENT_YEAR = new Date().getFullYear();
const YEAR_OPTIONS = Array.from({ length: 11 }, (_, i) => CURRENT_YEAR + 5 - i);

interface FormDialogProps {
  open: boolean;
  onClose: () => void;
  initial?: Gallery | null;
  onSave: (data: GalleryMutate, id?: string) => Promise<void>;
  saving: boolean;
}

export function GalleryFormDialog({ open, onClose, initial, onSave, saving }: FormDialogProps) {
  const [form, setForm] = useState<GalleryMutate>(() => ({
    title: initial?.title ?? '',
    description: initial?.description ?? '',
    image_id: initial?.image_id ?? '',
    category: initial?.category ?? '',
    year: initial?.year ?? CURRENT_YEAR,
    sort_order: initial?.sort_order ?? 0,
    is_active: initial?.is_active ?? true,
  }));

  const [pendingFile, setPendingFile] = useState<File | null>(null);
  const { mutateAsync: uploadFile } = usePostApiV10FileUpload();

  // Load categories
  const { data: categoryData } = useGetApiV10Category({ pageSize: 50 });
  const categories = useMemo(() => {
    return (categoryData as { responseData?: { rows?: Category[] } })?.responseData?.rows ?? [];
  }, [categoryData]);

  const handleOpen = (o: boolean) => {
    if (o) {
      setPendingFile(null);
      setForm({
        title: initial?.title ?? '',
        description: initial?.description ?? '',
        image_id: initial?.image_id ?? '',
        category: initial?.category ?? '',
        year: initial?.year ?? CURRENT_YEAR,
        sort_order: initial?.sort_order ?? 0,
        is_active: initial?.is_active ?? true,
      });
    }
  };

  const handle = (field: keyof GalleryMutate, value: unknown) => {
    setForm((p) => ({ ...p, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!form.title) {
      toast.error('Vui lòng nhập tiêu đề');
      return;
    }
    if (!form.image_id && !pendingFile) {
      toast.error('Vui lòng chọn hình ảnh');
      return;
    }

    const finalForm = { ...form };

    // Upload file first if there's a pending file
    if (pendingFile) {
      try {
        const res = await uploadFile({ data: { file: pendingFile, original: pendingFile.name } });
        const uploaded = (res as { responseData?: { id?: string } })?.responseData;
        if (uploaded?.id) {
          finalForm.image_id = uploaded.id;
        }
      } catch {
        toast.error('Tải ảnh lên thất bại, vui lòng thử lại');
        return;
      }
    }

    await onSave(finalForm, initial?.id);
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); handleOpen(o); }}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            {initial ? 'Chỉnh sửa hình ảnh' : 'Thêm hình ảnh mới'}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-2">
          {/* Title */}
          <div className="space-y-1.5">
            <Label htmlFor="title">Tiêu đề <span className="text-red-500">*</span></Label>
            <Input
              id="title"
              value={form.title ?? ''}
              onChange={(e) => handle('title', e.target.value)}
              placeholder="VD: Khai giảng khóa học..."
            />
          </div>

          {/* Image */}
          <div className="space-y-1.5">
            <Label>Hình ảnh <span className="text-red-500">*</span></Label>
            <ImagePicker
              savedPath={initial?.image?.path}
              pendingFile={pendingFile}
              onFileSelect={setPendingFile}
              onClearSaved={() => handle('image_id', '')}
            />
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <Label htmlFor="desc">Mô tả</Label>
            <Textarea
              id="desc"
              value={form.description ?? ''}
              onChange={(e) => handle('description', e.target.value)}
              placeholder="Mô tả ngắn về hình ảnh..."
              rows={3}
            />
          </div>

          {/* Category + Year */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>Danh mục ({categories.length})</Label>
              <Select value={form.category ?? ''} onValueChange={(v) => handle('category', v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn danh mục" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((c) => (
                    <SelectItem key={c.slug ?? c.id} value={c.slug ?? ''}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>Năm</Label>
              <Select
                value={String(form.year ?? CURRENT_YEAR)}
                onValueChange={(v) => handle('year', Number(v))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {YEAR_OPTIONS.map((y) => (
                    <SelectItem key={y} value={String(y)}>
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Sort order + Active */}
          <div className="grid grid-cols-2 gap-3 items-end">
            <div className="space-y-1.5">
              <Label htmlFor="sort_order">Thứ tự hiển thị</Label>
              <Input
                id="sort_order"
                type="number"
                value={form.sort_order ?? 0}
                onChange={(e) => handle('sort_order', Number(e.target.value))}
                min={0}
              />
            </div>
            <div className="flex items-center gap-2 pb-1">
              <Switch
                id="is_active"
                checked={form.is_active ?? true}
                onCheckedChange={(v) => handle('is_active', v)}
              />
              <Label htmlFor="is_active" className="cursor-pointer">
                {form.is_active ? 'Đang hiển thị' : 'Đã ẩn'}
              </Label>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
          <Button type="button" variant="outline" onClick={onClose}>Hủy</Button>
          <Button onClick={handleSubmit} disabled={saving} className="bg-[#19426D] hover:bg-[#0f3b5a]">
            {saving ? 'Đang lưu...' : 'Lưu lại'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
