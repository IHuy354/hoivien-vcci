'use client';

import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import type { Registration } from '@/api/models/registration';
export interface RegistrationUpdateBody { status?: string; admin_notes?: string; }
import { REGISTRATION_STATUS_OPTIONS } from './constants';
import { useGetApiV10RegistrationId } from '@/api/endpoints/registration';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';


interface RegistrationDetailDialogProps {
  id: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: RegistrationUpdateBody, id: string) => Promise<void>;
  isSaving: boolean;
}

export function RegistrationDetailDialog({
  id,
  open,
  onOpenChange,
  onSave,
  isSaving,
}: RegistrationDetailDialogProps) {
  
  // Only fetch if id exists
  const { data: response, isLoading } = useGetApiV10RegistrationId(id as string, {
      query: { enabled: !!id && open }
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const detail = (response as any)?.responseData as Registration | undefined;

  const { control, handleSubmit, reset } = useForm<RegistrationUpdateBody>({
    defaultValues: {
      status: 'pending',
      admin_notes: '',
    },
  });

  useEffect(() => {
    if (detail && open) {
        reset({
            status: detail.status || 'pending',
            admin_notes: detail.admin_notes || '',
        });
    }
  }, [detail, open, reset]);

  const onSubmit = (data: RegistrationUpdateBody) => {
      if (id) {
          onSave(data, id);
      }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderArrayValues = (items: any) => {
      if (!items || !Array.isArray(items) || items.length === 0) return <span className="text-slate-400 italic">Không có dữ liệu</span>;
      return <div className="flex flex-wrap gap-1.5 mt-1">{items.map((item, idx) => <Badge variant="secondary" key={idx} className="font-normal">{item}</Badge>)}</div>;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderBoolean = (val: any) => {
      if (val === true) return <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200" variant="outline">Có</Badge>;
      if (val === false) return <Badge className="bg-slate-50 text-slate-600 border-slate-200" variant="outline">Không</Badge>;
      return <span className="text-slate-400 italic">Không có dữ liệu</span>;
  };

  

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] flex flex-col p-0 overflow-hidden">
        <DialogHeader className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <DialogTitle className="text-xl">Chi tiết Đơn Đăng Ký</DialogTitle>
        </DialogHeader>

        {isLoading || !detail ? (
            <div className="p-6 space-y-4">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
            </div>
        ) : (
            <ScrollArea className="flex-1 px-6 py-4 overflow-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Cột 1: Thông tin người đăng ký */}
                    <div className="space-y-6">
                        <div>
                             <h3 className="text-sm font-bold text-[#19426D] uppercase tracking-wider mb-3">Thông tin cá nhân</h3>
                             <div className="space-y-3 text-sm">
                                  <div className="grid grid-cols-3 gap-2">
                                      <span className="text-slate-500">Họ và tên:</span>
                                      <span className="col-span-2 font-medium text-slate-900">{detail.full_name || '-'}</span>
                                  </div>
                                  <div className="grid grid-cols-3 gap-2">
                                      <span className="text-slate-500">Ngày sinh:</span>
                                      <span className="col-span-2 text-slate-900">{detail.date_of_birth ? format(new Date(detail.date_of_birth), 'dd/MM/yyyy') : '-'}</span>
                                  </div>
                                  <div className="grid grid-cols-3 gap-2">
                                      <span className="text-slate-500">Điện thoại:</span>
                                      <span className="col-span-2 text-slate-900">{detail.mobile || '-'}</span>
                                  </div>
                                  <div className="grid grid-cols-3 gap-2">
                                      <span className="text-slate-500">Email:</span>
                                      <span className="col-span-2 text-slate-900">{detail.email || '-'}</span>
                                  </div>
                                  <div className="grid grid-cols-3 gap-2">
                                      <span className="text-slate-500">Trình độ TA:</span>
                                      <span className="col-span-2 text-slate-900 capitalize">{detail.english_level || '-'}</span>
                                  </div>
                                  <div className="grid grid-cols-3 gap-2">
                                      <span className="text-slate-500">Cải thiện TA:</span>
                                      <span className="col-span-2 text-slate-900">{renderBoolean(detail.want_english_improvement)}</span>
                                  </div>
                             </div>
                        </div>

                        <Separator className="bg-slate-100" />

                        <div>
                             <h3 className="text-sm font-bold text-[#19426D] uppercase tracking-wider mb-3">Thông tin Công ty</h3>
                             <div className="space-y-3 text-sm">
                                  <div className="grid grid-cols-3 gap-2">
                                      <span className="text-slate-500">Tên công ty:</span>
                                      <span className="col-span-2 font-medium text-slate-900">{detail.company_name || '-'}</span>
                                  </div>
                                  <div className="grid grid-cols-3 gap-2">
                                      <span className="text-slate-500">Mã số thuế:</span>
                                      <span className="col-span-2 text-slate-900">{detail.tax_code || '-'}</span>
                                  </div>
                                  <div className="grid grid-cols-3 gap-2">
                                      <span className="text-slate-500">Ngành nghề:</span>
                                      <span className="col-span-2 text-slate-900">{detail.industry || '-'}</span>
                                  </div>
                                  <div className="grid grid-cols-3 gap-2">
                                      <span className="text-slate-500">Địa chỉ:</span>
                                      <span className="col-span-2 text-slate-900">{detail.company_address || '-'}</span>
                                  </div>
                                  <div className="grid grid-cols-3 gap-2">
                                      <span className="text-slate-500">Chức vụ:</span>
                                      <span className="col-span-2 font-medium text-slate-900">{detail.current_position || '-'}</span>
                                  </div>
                                  <div className="grid grid-cols-3 gap-2">
                                      <span className="text-slate-500 mt-1">Mô tả việc:</span>
                                      <span className="col-span-2 text-slate-900 leading-relaxed text-xs p-2 bg-slate-50 rounded-md border border-slate-100">{detail.job_description || '-'}</span>
                                  </div>
                                  <div className="grid grid-cols-3 gap-2">
                                      <span className="text-slate-500">Thành tựu:</span>
                                      <span className="col-span-2 text-slate-900 leading-relaxed text-xs p-2 bg-slate-50 rounded-md border border-slate-100">{detail.achievements || '-'}</span>
                                  </div>
                                  <div className="grid grid-cols-3 gap-2">
                                      <span className="text-slate-500">Hội viên VCCI:</span>
                                      <span className="col-span-2 text-slate-900">{detail.vcci_membership === 'member' ? `Có (${detail.vcci_member_code || 'Chưa ghi mã'})` : 'Không'}</span>
                                  </div>
                                  
                             </div>
                        </div>
                    </div>

                    {/* Cột 2: Thông tin khảo sát & Cập nhật trạng thái */}
                    <div className="space-y-6">
                         <div>
                             <h3 className="text-sm font-bold text-[#19426D] uppercase tracking-wider mb-3">Thông tin Khóa học</h3>
                             <div className="space-y-4 text-sm">
                                 <div>
                                      <span className="text-slate-500 block mb-1">Trạng thái cựu học viên:</span>
                                      <span className="text-slate-900 font-medium capitalize">{detail.alumni_status || 'Không'}</span>
                                  </div>
                                  <div>
                                      <span className="text-slate-500 block mb-1">Nguồn tham khảo:</span>
                                      <span className="text-slate-900 font-medium">{detail.referral_source || '-'}</span>
                                  </div>
                                  <div>
                                      <span className="text-slate-500 block">Mục tiêu khóa học:</span>
                                      {renderArrayValues(detail.goals)}
                                  </div>
                                  <div>
                                      <span className="text-slate-500 block">Kỹ năng chú trọng:</span>
                                      {renderArrayValues(detail.focus_skills)}
                                  </div>
                                  <div>
                                      <span className="text-slate-500 block">Lý do nhận học bổng:</span>
                                      {renderArrayValues(detail.scholarship_reason)}
                                  </div>
                                  <div>
                                      <span className="text-slate-500 block">Tham gia ban nào:</span>
                                      {renderArrayValues(detail.committee_participation)}
                                  </div>
                                  
                                  <div>
                                      <span className="text-slate-500 block mb-2 font-medium mt-4">Cam kết tham gia:</span>
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                          <div className="flex items-start gap-2 bg-slate-50 p-2 rounded">
                                              {renderBoolean(detail.attendance_commitment)} Cam kết đi học
                                          </div>
                                          <div className="flex items-start gap-2 bg-slate-50 p-2 rounded">
                                              {renderBoolean(detail.commitment_rules)} Tuân thủ nội quy
                                          </div>
                                          <div className="flex items-start gap-2 bg-slate-50 p-2 rounded">
                                              {renderBoolean(detail.commitment_cooperation)} Cam kết hợp tác
                                          </div>
                                          <div className="flex items-start gap-2 bg-slate-50 p-2 rounded">
                                              {renderBoolean(detail.commitment_sharing)} Chia sẻ kiến thức
                                          </div>
                                          <div className="flex items-start gap-2 bg-slate-50 p-2 rounded">
                                              {renderBoolean(detail.commitment_contribution)} Đóng góp xây dựng
                                          </div>
                                      </div>
                                  </div>

                                  {detail.message_to_organizers && (
                                      <div className="mt-2">
                                          <span className="text-slate-500 block mb-1">Lời nhắn tới BTC:</span>
                                          <div className="p-3 bg-amber-50 text-amber-900 rounded-lg text-sm border border-amber-100 italic">
                                            &quot;{detail.message_to_organizers}&quot;
                                          </div>
                                      </div>
                                  )}
                             </div>
                         </div>
                    </div>
                </div>

                 {/* Form cập nhật trạng thái Admin */}
                 <div className="mt-8 p-5 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Phê duyệt đơn</h3>
                    <form id="registration-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="status" className="font-semibold">Trạng thái hồ sơ</Label>
                                <Controller
                                    control={control}
                                    name="status"
                                    render={({ field }) => (
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className="bg-white">
                                            <SelectValue placeholder="Chọn trạng thái" />
                                        </SelectTrigger>
                                        <SelectContent>
                                        {REGISTRATION_STATUS_OPTIONS.map(opt => (
                                            <SelectItem key={opt.value} value={opt.value}>
                                                <div className="flex items-center gap-2">
                                                    <opt.icon className="h-4 w-4" />
                                                    <span>{opt.label}</span>
                                                </div>
                                            </SelectItem>
                                        ))}
                                        </SelectContent>
                                    </Select>
                                    )}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="admin_notes" className="font-semibold">Ghi chú của ban tuyển sinh</Label>
                                <Controller
                                    control={control}
                                    name="admin_notes"
                                    render={({ field }) => (
                                        <Textarea {...field} id="admin_notes" rows={2} className="bg-white" placeholder="VD: Đã liên hệ, thiếu hồ sơ..." />
                                    )}
                                />
                            </div>
                        </div>
                    </form>
                 </div>

            </ScrollArea>
        )}

        <div className="flex justify-end gap-3 px-6 py-4 border-t bg-slate-50/50">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Đóng</Button>
            <Button type="submit" form="registration-form" disabled={isSaving || !detail} className="bg-[#19426D] hover:bg-[#0f3b5a]">
              {isSaving ? 'Đang lưu...' : 'Lưu cập nhật'}
            </Button>
        </div>

      </DialogContent>
    </Dialog>
  );
}
