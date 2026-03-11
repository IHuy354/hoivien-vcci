'use client';

import { useState, useMemo } from 'react';
import { toast } from 'sonner';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { format } from 'date-fns';

import {
  useGetApiV10Registration,
  putApiV10RegistrationId,
  useDeleteApiV10RegistrationId,
} from '@/api/endpoints/registration';
import type { Registration } from '@/api/models/registration';
import { RegistrationUpdateBody } from './_components/registration-detail-dialog';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select';

import {
  Eye,
  Trash2,
  Search,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { PAGE_SIZE, CURRENT_YEAR, YEAR_OPTIONS, REGISTRATION_STATUS_OPTIONS, getStatusInfo } from './_components/constants';
import { RegistrationDetailDialog } from './_components/registration-detail-dialog';

export default function RegistrationManagementPage() {
    const queryClient = useQueryClient();

    // ── State ──
    const [searchName, setSearchName] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [yearFilter, setYearFilter] = useState<string>(String(CURRENT_YEAR));
    const [page, setPage] = useState(1);
    const [updatingStatusId, setUpdatingStatusId] = useState<string | null>(null);

    // ── Dialogs ──
    const [detailId, setDetailId] = useState<string | null>(null);
    const [detailOpen, setDetailOpen] = useState(false);
    const [deleteTarget, setDeleteTarget] = useState<Registration | null>(null);

    // ── Build query params ──
    const queryParams = useMemo(() => {
        const filters: string[] = [];
        
        if (statusFilter !== 'all') filters.push(`status==${statusFilter}`);
        if (yearFilter !== 'all') filters.push(`year==${yearFilter}`);
        // Giả sử API cho phép tìm kiếm full_name với toán tử like %
        if (searchName.trim())    filters.push(`full_name==%${searchName.trim()}%`);
        
        return {
            page,
            pageSize: PAGE_SIZE,
            sortField: 'created_at',
            sortOrder: 'desc' as const,
            ...(filters.length ? { filters: filters.join(';') } : {}),
        };
    }, [page, statusFilter, yearFilter, searchName]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: response, isLoading } = useGetApiV10Registration(queryParams as any);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const registrations: Registration[] = useMemo(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const rows = (response as any)?.responseData?.rows ?? [];
        return rows as Registration[];
    }, [response]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const total = (response as any)?.responseData?.count ?? 0;
    const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

    // ── Mutations ──
    const { mutateAsync: updateRegistration, isPending: updating } = useMutation({ mutationFn: ({ id, data }: { id: string; data: RegistrationUpdateBody }) => putApiV10RegistrationId(id, { data }) });
    const { mutateAsync: deleteRegistration, isPending: deleting } = useDeleteApiV10RegistrationId();

    const invalidate = () => {
        queryClient.invalidateQueries({ queryKey: ['/api/v1.0/registration'] });
    };

    const handleSaveStatus = async (data: RegistrationUpdateBody, id: string) => {
        try {
            await updateRegistration({ id, data });
            toast.success('Cập nhật trạng thái thành công');
            setDetailOpen(false);
            setDetailId(null);
            invalidate();
        } catch {
            toast.error('Có lỗi xảy ra, vui lòng thử lại');
        }
    };

    const handleQuickStatusChange = async (itemId: string, newStatus: string) => {
        try {
            setUpdatingStatusId(itemId);
            await updateRegistration({ 
                id: itemId, 
                data: { status: newStatus } 
            });
            toast.success('Cập nhật trạng thái thành công');
            invalidate();
        } catch {
            toast.error('Có lỗi xảy ra, vui lòng thử lại');
        } finally {
            setUpdatingStatusId(null);
        }
    };

    const handleDelete = async () => {
        if (!deleteTarget?.id) return;
        try {
            await deleteRegistration({ id: deleteTarget.id });
            toast.success('Xóa đơn đăng ký thành công');
            setDeleteTarget(null);
            invalidate();
        } catch {
            toast.error('Xóa thất bại, vui lòng thử lại');
        }
    };

    const openDetail = (id: string) => { 
        setDetailId(id); 
        setDetailOpen(true); 
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold text-slate-900">Quản lý Đơn đăng ký Khóa học</h1>
                <p className="text-sm text-slate-500 mt-0.5">
                    Kiểm duyệt và quản lý những người đăng ký xét hồ sơ vào các Khóa Học CEO
                </p>
            </div>

            {/* ── Filters ── */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm mb-6 flex flex-col gap-3 sm:flex-row sm:items-center justify-between">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center flex-1">
                    <div className="relative flex-1 max-w-xs">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                            value={searchName}
                            onChange={(e) => { setSearchName(e.target.value); setPage(1); }}
                            placeholder="Tìm tên người đăng ký..."
                            className="pl-9 h-10 w-full rounded-lg border-slate-200"
                        />
                    </div>
                    <Select value={statusFilter} onValueChange={(val) => { setStatusFilter(val); setPage(1); }}>
                        <SelectTrigger className="w-[180px] h-10 border-slate-200">
                            <SelectValue placeholder="Lọc trạng thái" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Tất cả trạng thái</SelectItem>
                            {REGISTRATION_STATUS_OPTIONS.map((s) => (
                                <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                     <Select value={yearFilter} onValueChange={(val) => { setYearFilter(val); setPage(1); }}>
                        <SelectTrigger className="w-[150px] h-10 border-slate-200">
                            <SelectValue placeholder="Lọc theo khóa" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Tất cả các khóa</SelectItem>
                            {YEAR_OPTIONS.map((y) => (
                                <SelectItem key={y} value={String(y)}>Khóa {y}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="text-sm text-slate-500 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-100">
                    Tổng số: <span className="font-bold text-slate-800">{total}</span> hồ sơ
                </div>
            </div>

            {/* ── Data Table ── */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                <Table>
                    <TableHeader className="bg-slate-50">
                    <TableRow>
                        <TableHead className="w-[250px] font-semibold text-slate-700">Người đăng ký</TableHead>
                        <TableHead className="w-[200px] font-semibold text-slate-700">Thông tin liên hệ</TableHead>
                        <TableHead className="w-[250px] font-semibold text-slate-700">Công ty</TableHead>
                        <TableHead className="font-semibold text-slate-700">Ngày ĐK/Khóa</TableHead>
                        <TableHead className="font-semibold text-slate-700">Trạng thái</TableHead>
                        <TableHead className="text-right w-[100px] font-semibold text-slate-700">Thao tác</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {isLoading ? (
                        <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-slate-500">Đang tải dữ liệu...</TableCell>
                        </TableRow>
                    ) : registrations.length === 0 ? (
                        <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-slate-500">Chưa có đơn đăng ký nào.</TableCell>
                        </TableRow>
                    ) : (
                        registrations.map((item) => {
                            const statusData = getStatusInfo(item.status || 'pending');
                            const StatusIcon = statusData.icon;

                            return (
                                <TableRow key={item.id} className="hover:bg-slate-50 transition-colors">
                                    <TableCell>
                                        <div className="font-medium text-slate-900">{item.full_name}</div>
                                        {/* Chức vụ có thể không nằm trong list chung mà nằm trong detail, nhưng nếu API trả về hãy dùng */}
                                        <div className="text-xs text-slate-500 mt-1 line-clamp-1">{item.current_position || 'Chưa cung cấp'}</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="text-sm text-slate-800 break-all">{item.email}</div>
                                        <div className="text-xs text-slate-500 mt-1">{item.mobile}</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="text-sm font-medium text-slate-800 line-clamp-2" title={item.company_name}>{item.company_name || '-'}</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="text-sm text-slate-800">
                                            {item.created_at ? format(new Date(item.created_at), 'dd/MM/yyyy HH:mm') : '-'}
                                        </div>
                                         <div className="text-xs text-blue-600 font-medium mt-1">Khóa {item.year || CURRENT_YEAR}</div>
                                    </TableCell>
                                    <TableCell>
                                        <Select
                                            value={item.status || 'pending'}
                                            onValueChange={(newStatus) => handleQuickStatusChange(item.id as string, newStatus)}
                                            disabled={updatingStatusId === item.id}
                                        >
                                            <SelectTrigger className={cn(
                                                "w-[140px] h-8 border-0 font-medium transition-colors",
                                                statusData.color,
                                                updatingStatusId === item.id && "opacity-50 cursor-wait"
                                            )}>
                                                <div className="flex items-center gap-1.5">
                                                    <StatusIcon className="w-3.5 h-3.5" />
                                                    <SelectValue />
                                                </div>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {REGISTRATION_STATUS_OPTIONS.map((opt) => {
                                                    const Icon = opt.icon;
                                                    return (
                                                        <SelectItem key={opt.value} value={opt.value}>
                                                            <div className="flex items-center gap-2">
                                                                <Icon className="h-4 w-4" />
                                                                <span>{opt.label}</span>
                                                            </div>
                                                        </SelectItem>
                                                    );
                                                })}
                                            </SelectContent>
                                        </Select>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Button variant="ghost" size="icon" title="Chi tiết" className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50" onClick={() => openDetail(item.id as string)}>
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" title="Xóa" className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => setDeleteTarget(item)}>
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            );
                        })
                    )}
                    </TableBody>
                </Table>
                </div>

                {totalPages > 1 && (
                    <div className="border-t border-slate-200 p-4 flex items-center justify-between bg-slate-50">
                        <p className="text-sm text-slate-500">
                        Hiển thị <span className="font-medium">{(page - 1) * PAGE_SIZE + 1}</span> đến{' '}
                        <span className="font-medium">{Math.min(page * PAGE_SIZE, total)}</span> trong{' '}
                        <span className="font-medium">{total}</span> hồ sơ
                        </p>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="h-8 border-slate-200 bg-white">
                                <ChevronLeft className="h-4 w-4 mr-1" /> Trước
                            </Button>
                            <div className="flex items-center gap-1">
                                {Array.from({ length: Math.min(5, totalPages) }).map((_, idx) => {
                                    // Hiển thị tối đa 5 trang xung quanh trang hiện tại để chống tràn
                                    let startPage = Math.max(1, page - 2);
                                    if (startPage + 4 > totalPages) startPage = Math.max(1, totalPages - 4);
                                    const p = startPage + idx;
                                    
                                    if (p > totalPages) return null;

                                    return (
                                        <Button
                                            key={p}
                                            variant={page === p ? "default" : "outline"}
                                            size="sm"
                                            onClick={() => setPage(p)}
                                            className={cn("h-8 w-8 p-0", page === p ? "bg-[#19426D] hover:bg-[#0f3b5a]" : "bg-white border-slate-200")}
                                        >
                                            {p}
                                        </Button>
                                    );
                                })}
                            </div>
                            <Button variant="outline" size="sm" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="h-8 border-slate-200 bg-white">
                                Sau <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                        </div>
                    </div>
                )}
            </div>

            {/* DETAIL / UPDATE DIALOG */}
            <RegistrationDetailDialog
                  id={detailId}
                  open={detailOpen}
                  onOpenChange={(open) => { if(!open) { setDetailId(null); setDetailOpen(false); } }}
                  onSave={handleSaveStatus}
                  isSaving={updating}
            />

            {/* DELETE DIALOG */}
            <AlertDialog open={!!deleteTarget} onOpenChange={(open) => !open && setDeleteTarget(null)}>
                <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Xác nhận xóa</AlertDialogTitle>
                    <AlertDialogDescription>
                    Bạn có chắc chắn muốn xóa đơn đăng ký của <strong>{deleteTarget?.full_name}</strong> từ công ty <strong>{deleteTarget?.company_name}</strong>? Hành động này không thể hoàn tác.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Hủy</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} disabled={deleting} className="bg-red-600 hover:bg-red-700">
                    {deleting ? 'Đang xóa...' : 'Xóa đơn'}
                    </AlertDialogAction>
                </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
