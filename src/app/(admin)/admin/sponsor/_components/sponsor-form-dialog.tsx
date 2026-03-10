import { useState } from 'react';
import { toast } from 'sonner';
import { RefreshCw } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

import type { SponsorMutate } from '@/api/models/sponsorMutate';
import type { Sponsor } from '@/api/models/sponsor';
import { usePostApiV10FileUpload } from '@/api/endpoints/file';

import { CURRENT_YEAR, emptyForm, TIER_OPTIONS, YEAR_OPTIONS } from './constants';
import { LogoPicker } from './logo-picker';

interface FormDialogProps {
  open: boolean;
  onClose: () => void;
  initial?: Sponsor | null;
  onSave: (data: SponsorMutate, id?: string) => Promise<void>;
  saving: boolean;
}

export function SponsorFormDialog({ open, onClose, initial, onSave, saving }: FormDialogProps) {
  const [form, setForm] = useState<SponsorMutate>(() =>
    initial
      ? {
          name: initial.name ?? '',
          logo_id: initial.logo_id ?? '',
          website_url: initial.website_url ?? '',
          tier: initial.tier ?? 'gold',
          year: initial.year ?? CURRENT_YEAR,
          sort_order: initial.sort_order ?? 0,
          is_active: initial.is_active ?? true,
        }
      : emptyForm()
  );

  // File đang chờ upload (chưa gửi API)
  const [pendingFile, setPendingFile] = useState<File | null>(null);
  const { mutateAsync: uploadFile, isPending: uploading } = usePostApiV10FileUpload();

  // reset when dialog re-opens
  const handleOpen = (o: boolean) => {
    if (o) {
      setPendingFile(null);
      setForm(
        initial
          ? {
              name: initial.name ?? '',
              logo_id: initial.logo_id ?? '',
              website_url: initial.website_url ?? '',
              tier: initial.tier ?? 'gold',
              year: initial.year ?? CURRENT_YEAR,
              sort_order: initial.sort_order ?? 0,
              is_active: initial.is_active ?? true,
            }
          : emptyForm()
      );
    }
  };

  const handle = (field: keyof SponsorMutate, value: unknown) => {
    setForm((p) => ({ ...p, [field]: value }));
  };

  const handleSubmit = async () => {
    let finalForm = { ...form };
    // Upload ảnh trước nếu user đã chọn file mới
    if (pendingFile) {
      try {
        const res = await uploadFile({ data: { file: pendingFile, original: pendingFile.name } });
        const uploaded = (res as { responseData?: { id?: string } })?.responseData;
        if (uploaded?.id) {
          finalForm = { ...finalForm, logo_id: uploaded.id };
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
            {initial ? 'Chỉnh sửa nhà tài trợ' : 'Thêm nhà tài trợ mới'}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-2">
          {/* Name */}
          <div className="space-y-1.5">
            <Label htmlFor="sp-name">Tên nhà tài trợ <span className="text-destructive">*</span></Label>
            <Input
              id="sp-name"
              value={form.name ?? ''}
              onChange={(e) => handle('name', e.target.value)}
              placeholder="VD: VCCI-IP"
            />
          </div>

          {/* Logo */}
          <div className="space-y-1.5">
            <Label>Logo nhà tài trợ</Label>
            <LogoPicker
              savedId={form.logo_id || undefined}
              pendingFile={pendingFile}
              onFileSelect={setPendingFile}
              onClearSaved={() => handle('logo_id', '')}
            />
          </div>

          {/* Website */}
          <div className="space-y-1.5">
            <Label htmlFor="sp-web">Website URL</Label>
            <Input
              id="sp-web"
              value={form.website_url ?? ''}
              onChange={(e) => handle('website_url', e.target.value)}
              placeholder="https://example.com"
            />
          </div>

          {/* Tier + Year */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>Hạng tài trợ</Label>
              <Select value={form.tier ?? 'gold'} onValueChange={(v) => handle('tier', v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TIER_OPTIONS.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      {t.label}
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
              <Label htmlFor="sp-order">Thứ tự hiển thị</Label>
              <Input
                id="sp-order"
                type="number"
                value={form.sort_order ?? 0}
                onChange={(e) => handle('sort_order', Number(e.target.value))}
                min={0}
              />
            </div>
            <div className="flex items-center gap-2 pb-1">
              <Switch
                id="sp-active"
                checked={form.is_active ?? true}
                onCheckedChange={(v) => handle('is_active', v)}
              />
              <Label htmlFor="sp-active" className="cursor-pointer">
                {form.is_active ? 'Đang hiển thị' : 'Đã ẩn'}
              </Label>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={saving}>
            Hủy
          </Button>
          <Button onClick={handleSubmit} disabled={saving || uploading || !form.name?.trim()}>
            {saving ? (
               <span className="flex items-center gap-2">
                 <RefreshCw className="h-4 w-4 animate-spin" />
                 Đang lưu...
               </span>
            ) : initial ? 'Cập nhật' : 'Thêm mới'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
