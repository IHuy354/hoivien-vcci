'use client';

import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { AvatarPicker } from './avatar-picker';

import type { Speaker } from '@/api/models/speaker';
import type { SpeakerMutate } from '@/api/models/speakerMutate';
import { CURRENT_YEAR, YEAR_OPTIONS, SPEAKER_TYPES } from './constants';

interface SpeakerFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  speaker: Speaker | null;
  onSave: (data: SpeakerMutate, id?: string) => Promise<void>;
  isSaving: boolean;
  defaultType?: string;
}

export function SpeakerFormDialog({
  open,
  onOpenChange,
  speaker,
  onSave,
  isSaving,
  defaultType = 'speaker'
}: SpeakerFormDialogProps) {
  const [avatarUrl, setAvatarUrl] = useState('');

  const { control, handleSubmit, reset, setValue, formState: { errors } } = useForm<SpeakerMutate>({
    defaultValues: {
      full_name: '',
      title: '',
      position: '',
      company: '',
      description: '',
      type: defaultType,
      year: CURRENT_YEAR,
      sort_order: 1,
      is_active: true,
      avatar_id: null as unknown as string,
    },
  });

  useEffect(() => {
    if (open) {
      if (speaker) {
        reset({
          full_name: speaker.full_name ?? '',
          title: speaker.title ?? '',
          position: speaker.position ?? '',
          company: speaker.company ?? '',
          description: speaker.description ?? '',
          type: speaker.type ?? defaultType,
          year: speaker.year ?? CURRENT_YEAR,
          sort_order: speaker.sort_order ?? 1,
          is_active: speaker.is_active ?? true,
          avatar_id: speaker.avatar_id as unknown as string,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setAvatarUrl((speaker as any).avatar?.url || '');
      } else {
        reset({
          full_name: '',
          title: '',
          position: '',
          company: '',
          description: '',
          type: defaultType,
          year: CURRENT_YEAR,
          sort_order: 1,
          is_active: true,
          avatar_id: null as unknown as string,
        });
        setAvatarUrl('');
      }
    }
  }, [open, speaker, reset, defaultType]);

  const handleAvatarChange = (id: string, url: string) => {
    setValue('avatar_id', id ? id as unknown as string : null as unknown as string, { shouldValidate: true, shouldDirty: true });
    setAvatarUrl(url);
  };

  const onSubmit = (data: SpeakerMutate) => {
    onSave(data, speaker?.id);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{speaker ? 'Cập nhật Thành Viên' : 'Thêm mới Thành Viên'}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-4">
            
            <div className="flex flex-col sm:flex-row gap-6">
                {/* Cột trái: Ảnh đại diện */}
                <div className="flex flex-col items-center gap-3">
                     <Label>Ảnh đại diện</Label>
                    <AvatarPicker value={avatarUrl} onFileIdChange={handleAvatarChange} />
                </div>
                
                 {/* Cột phải: Form nhập liệu */}
                 <div className="flex-1 space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="full_name">Họ và tên <span className="text-red-500">*</span></Label>
                        <Controller
                            control={control}
                            name="full_name"
                            rules={{ required: 'Họ và tên là bắt buộc' }}
                            render={({ field }) => <Input {...field} id="full_name" placeholder="Nguyễn Văn A" />}
                        />
                        {errors.full_name && <p className="text-sm text-red-500">{errors.full_name.message}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                         <div className="grid gap-2">
                            <Label htmlFor="type">Phân loại</Label>
                            <Controller
                                control={control}
                                name="type"
                                render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Chọn loại" />
                                    </SelectTrigger>
                                    <SelectContent>
                                    {SPEAKER_TYPES.map(opt => (
                                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                    ))}
                                    </SelectContent>
                                </Select>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="year">Năm hoạt động</Label>
                            <Controller
                                control={control}
                                name="year"
                                render={({ field }) => (
                                <Select onValueChange={(val) => field.onChange(Number(val))} value={String(field.value)}>
                                    <SelectTrigger>
                                    <SelectValue placeholder="Chọn năm" />
                                    </SelectTrigger>
                                    <SelectContent>
                                    {YEAR_OPTIONS.map((y) => (
                                        <SelectItem key={y} value={String(y)}>{y}</SelectItem>
                                    ))}
                                    </SelectContent>
                                </Select>
                                )}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                         <div className="grid gap-2">
                            <Label htmlFor="title">Chức danh</Label>
                            <Controller
                                control={control}
                                name="title"
                                render={({ field }) => <Input {...field} id="title" placeholder="VD: UV-BCH VCCI Khóa 7" />}
                            />
                        </div>

                         <div className="grid gap-2">
                            <Label htmlFor="position">Vị trí (Nghề nghiệp)</Label>
                            <Controller
                                control={control}
                                name="position"
                                render={({ field }) => <Input {...field} id="position" placeholder="VD: Chủ Tịch HĐQT" />}
                            />
                        </div>
                    </div>
                    
                    <div className="grid gap-2">
                        <Label htmlFor="company">Công ty</Label>
                        <Controller
                            control={control}
                            name="company"
                            render={({ field }) => <Input {...field} id="company" placeholder="VD: Cty XNK..." />}
                        />
                    </div>
                </div>
            </div>

            <div className="grid gap-2">
                <Label htmlFor="description">Mô tả/Giới thiệu</Label>
                <Controller
                    control={control}
                    name="description"
                    render={({ field }) => (
                        <Textarea {...field} id="description" rows={4} placeholder="Nhập thêm thông tin giới thiệu diễn giả..." />
                    )}
                />
            </div>

            <div className="grid grid-cols-2 gap-4 border-t pt-4 border-slate-100">
                <div className="grid gap-2">
                    <Label htmlFor="sort_order">Thứ tự hiển thị</Label>
                    <Controller
                        control={control}
                        name="sort_order"
                        render={({ field }) => (
                            <Input
                                {...field}
                                id="sort_order"
                                type="number"
                                onChange={(e) => field.onChange(Number(e.target.value))}
                            />
                        )}
                    />
                </div>

                <div className="flex items-center gap-3">
                    <Label htmlFor="is_active" className="cursor-pointer font-medium text-slate-700">Trạng thái hiển thị</Label>
                    <Controller
                        control={control}
                        name="is_active"
                        render={({ field }) => (
                            <Switch id="is_active" checked={field.value} onCheckedChange={field.onChange} />
                        )}
                    />
                </div>
            </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Hủy</Button>
            <Button type="submit" disabled={isSaving} className="bg-[#19426D] hover:bg-[#0f3b5a]">
              {isSaving ? 'Đang lưu...' : 'Lưu lại'}
            </Button>
          </div>

        </form>
      </DialogContent>
    </Dialog>
  );
}