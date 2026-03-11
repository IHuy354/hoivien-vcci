'use client';

import { useState, useMemo } from 'react';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';

import {
  useGetApiV10Gallery,
  getApiV10GalleryId,
  usePostApiV10Gallery,
  usePutApiV10GalleryId,
  useDeleteApiV10GalleryId,
} from '@/api/endpoints/gallery';
import { useGetApiV10Category } from '@/api/endpoints/category';
import type { Gallery } from '@/api/models/gallery';
import type { GalleryMutate } from '@/api/models/galleryMutate';
import type { Category } from '@/api/models/category';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
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
  Plus,
  Pencil,
  Trash2,
  Search,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from 'lucide-react';
import { cn } from '@/lib/utils';

import { GalleryFormDialog } from './_components/gallery-form-dialog';
import { GalleryImage } from './_components/gallery-image';

const PAGE_SIZE = 10;
const CURRENT_YEAR = new Date().getFullYear();
const YEAR_OPTIONS = Array.from({ length: 11 }, (_, i) => CURRENT_YEAR + 5 - i);

export default function GalleryManagementPage() {
  const queryClient = useQueryClient();

  // Filters
  const [searchTitle, setSearchTitle] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [yearFilter, setYearFilter] = useState<string>('all');
  const [page, setPage] = useState(1);

  // Dialogs
  const [formOpen, setFormOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<Gallery | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Gallery | null>(null);
  const [loadingDetailId, setLoadingDetailId] = useState<string | null>(null);

  // Load categories (only gallery type)
  const { data: categoryData } = useGetApiV10Category({ 
    pageSize: 100,
    // filters: 'type==gallery'
  });
  const categories = useMemo(() => {
    return (categoryData as { responseData?: { rows?: Category[] } })?.responseData?.rows ?? [];
  }, [categoryData]);

  // Query Params
  const queryParams = useMemo(() => {
    const filters: string[] = [];
    if (categoryFilter !== 'all') filters.push(`category==${categoryFilter}`);
    if (yearFilter !== 'all') filters.push(`year==${yearFilter}`);
    if (searchTitle.trim()) filters.push(`title==%${searchTitle.trim()}%`);
    
    return {
      page,
      pageSize: PAGE_SIZE,
      sortField: 'sort_order',
      sortOrder: 'asc' as const,
      ...(filters.length ? { filters: filters.join(';') } : {}),
    };
  }, [page, categoryFilter, yearFilter, searchTitle]);

  // Data
  const { data: response, isLoading } = useGetApiV10Gallery(queryParams);

  const galleryItems: Gallery[] = useMemo(() => {
    return (response as { responseData?: { rows?: Gallery[] } })?.responseData?.rows ?? [];
  }, [response]);

  const total = (response as { responseData?: { count?: number } })?.responseData?.count ?? 0;
  const totalPages = Math.ceil(total / PAGE_SIZE);

  // Mutations
  const { mutateAsync: createItem, isPending: creating } = usePostApiV10Gallery();
  const { mutateAsync: updateItem, isPending: updating } = usePutApiV10GalleryId();
  const { mutateAsync: deleteItem, isPending: deleting } = useDeleteApiV10GalleryId();

  const saving = creating || updating;

  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: ['/api/v1.0/gallery'] });
  };

  const handleSave = async (data: GalleryMutate, id?: string) => {
    try {
      if (id) {
        await updateItem({ id, data });
        toast.success('Cập nhật hình ảnh thành công');
      } else {
        await createItem({ data });
        toast.success('Thêm hình ảnh thành công');
      }
      setFormOpen(false);
      setEditTarget(null);
      invalidate();
    } catch {
      toast.error('Có lỗi xảy ra, vui lòng thử lại');
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget?.id) return;
    try {
      await deleteItem({ id: deleteTarget.id });
      toast.success('Xóa hình ảnh thành công');
      setDeleteTarget(null);
      invalidate();
    } catch {
      toast.error('Xóa thất bại, vui lòng thử lại');
    }
  };

  const openCreate = () => { setEditTarget(null); setFormOpen(true); };
  
  const openEdit = async (item: Gallery) => {
    if (!item.id) return;
    
    try {
      setLoadingDetailId(item.id);
      const response = await getApiV10GalleryId(item.id);
      const galleryDetail = (response as { responseData?: Gallery })?.responseData;
      
      if (galleryDetail) {
        setEditTarget(galleryDetail);
        setFormOpen(true);
      } else {
        toast.error('Không tìm thấy dữ liệu');
      }
    } catch (error) {
      toast.error('Không thể tải dữ liệu, vui lòng thử lại');
    } finally {
      setLoadingDetailId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Quản lý Thư viện ảnh</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Quản lý và cập nhật hình ảnh hoạt động
          </p>
        </div>
        <Button onClick={openCreate} className="gap-2 bg-[#19426D] hover:bg-[#0f3b5a]">
          <Plus className="h-4 w-4" />
          Thêm hình ảnh
        </Button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              value={searchTitle}
              onChange={(e) => { setSearchTitle(e.target.value); setPage(1); }}
              placeholder="Tìm kiếm hình ảnh..."
              className="pl-9 h-10 w-full rounded-lg border-slate-200 bg-slate-50 focus:bg-white"
            />
          </div>

          <Select value={categoryFilter} onValueChange={(v) => { setCategoryFilter(v); setPage(1); }}>
            <SelectTrigger className="w-[180px] h-10 bg-slate-50 border-slate-200">
              <SelectValue placeholder="Danh mục" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả danh mục</SelectItem>
              {categories.map((c) => (
                <SelectItem key={c.slug} value={c.slug ?? ''}>{c.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={yearFilter} onValueChange={(v) => { setYearFilter(v); setPage(1); }}>
            <SelectTrigger className="w-[140px] h-10 bg-slate-50 border-slate-200">
              <SelectValue placeholder="Năm" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả các năm</SelectItem>
              {YEAR_OPTIONS.map((y) => (
                <SelectItem key={y} value={String(y)}>{y}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="w-[80px] font-semibold text-slate-700 text-center">Ảnh</TableHead>
                <TableHead className="min-w-[200px] font-semibold text-slate-700">Tiêu đề</TableHead>
                <TableHead className="font-semibold text-slate-700">Danh mục</TableHead>
                <TableHead className="font-semibold text-slate-700 text-center">Năm</TableHead>
                <TableHead className="font-semibold text-slate-700 text-center">Trạng thái</TableHead>
                <TableHead className="font-semibold text-slate-700 text-center">Sắp xếp</TableHead>
                <TableHead className="text-right w-[100px] font-semibold text-slate-700">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-slate-500">Đang tải dữ liệu...</TableCell>
                </TableRow>
              ) : galleryItems.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-slate-500">Không tìm thấy hình ảnh nào</TableCell>
                </TableRow>
              ) : (
                galleryItems.map((item) => {
                  return (
                    <TableRow key={item.id} className="hover:bg-slate-50 transition-colors">
                      <TableCell className="text-center">
                        <div className="h-12 w-16 mx-auto rounded overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center relative group">
                          <GalleryImage imagePath={item.image?.path} alt={item.title} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="font-medium text-slate-900 line-clamp-1">{item.title}</p>
                        {item.description && <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{item.description}</p>}
                      </TableCell>
                      <TableCell>
                        {item.categories && item.categories.length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {item.categories.map((cat) => (
                              <span 
                                key={cat.id} 
                                className="inline-flex px-2 py-1 rounded bg-blue-50 border border-blue-200 text-xs text-blue-700"
                              >
                                {cat.name}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-slate-400 text-sm">-</span>
                        )}
                      </TableCell>
                      <TableCell className="text-center font-medium text-slate-600">{item.year ?? '-'}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant={item.is_active ? 'default' : 'secondary'} className={cn(item.is_active ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' : '')}>
                          {item.is_active ? 'Hiển thị' : 'Đã ẩn'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center text-slate-600 font-medium">{item.sort_order}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50" 
                            onClick={() => openEdit(item)}
                            disabled={loadingDetailId === item.id}
                          >
                            {loadingDetailId === item.id ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Pencil className="h-4 w-4" />
                            )}
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => setDeleteTarget(item)}>
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="border-t border-slate-200 p-4 flex items-center justify-between bg-slate-50">
            <p className="text-sm text-slate-500">
              Hiển thị <span className="font-medium">{(page - 1) * PAGE_SIZE + 1}</span> đến{' '}
              <span className="font-medium">{Math.min(page * PAGE_SIZE, total)}</span> trong <span className="font-medium">{total}</span> hình ảnh
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="h-8 border-slate-200">
                <ChevronLeft className="h-4 w-4 mr-1" /> Trước
              </Button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <Button
                    key={i} variant={page === i + 1 ? 'default' : 'outline'} size="sm"
                    onClick={() => setPage(i + 1)}
                    className={cn('h-8 w-8 p-0', page === i + 1 ? 'bg-[#19426D] hover:bg-[#0f3b5a]' : 'border-slate-200')}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
              <Button variant="outline" size="sm" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="h-8 border-slate-200">
                Sau <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Forms & Dialogs */}
      <GalleryFormDialog
        open={formOpen}
        onClose={() => setFormOpen(false)}
        initial={editTarget}
        onSave={handleSave}
        saving={saving}
      />

      <AlertDialog open={!!deleteTarget} onOpenChange={(open) => !open && setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xác nhận xóa</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn có chắc chắn muốn xóa ảnh <strong>{deleteTarget?.title}</strong>? Hành động này không thể hoàn tác.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Hủy</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} disabled={deleting} className="bg-red-600 hover:bg-red-700 focus:ring-red-600">
              {deleting ? 'Đang xóa...' : 'Xóa dữ liệu'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
