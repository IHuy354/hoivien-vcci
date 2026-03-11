'use client';

import { useState, useMemo } from 'react';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';

import {
  useGetApiV10Category,
  usePostApiV10Category,
  usePutApiV10CategoryId,
  useDeleteApiV10CategoryId,
} from '@/api/endpoints/category';
import type { Category } from '@/api/models/category';
import type { CategoryMutate } from '@/api/models/categoryMutate';
import { slugify } from '@/lib/slugify';

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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
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
import { Label } from '@/components/ui/label';

import {
  Plus,
  Pencil,
  Trash2,
  Search,
  ChevronLeft,
  ChevronRight,
  Tag,
  Hash,
  Link2,
  ExternalLink,
  Folder,
} from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const PAGE_SIZE = 10;

// Helper để lấy màu badge theo type
const getTypeBadgeVariant = (type?: string) => {
  switch (type) {
    case 'industry':
      return { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', icon: 'Folder' };
    case 'trade':
      return { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', icon: 'Tag' };
    case 'gallery':
      return { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', icon: 'Folder' };
    case 'post':
      return { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', icon: 'Folder' };
    default:
      return { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200', icon: 'Folder' };
  }
};

export default function CategoryManagementPage() {
  const queryClient = useQueryClient();

  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);

  const [formOpen, setFormOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<Category | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Category | null>(null);

  const { control, handleSubmit, reset, formState: { errors }, watch, setValue } = useForm<CategoryMutate>({
    defaultValues: { name: '', slug: '', type: '', url: '' },
  });

  const queryParams = useMemo(() => {
    const filters: string[] = [];
    if (searchName.trim()) filters.push(`name==%${searchName.trim()}%`);
    return {
      page,
      pageSize: PAGE_SIZE,
      ...(filters.length ? { filters: filters.join(';') } : {}),
    };
  }, [page, searchName]);

  const { data: response, isLoading } = useGetApiV10Category(queryParams as { page: number; pageSize: number; filters?: string });

  const categories = useMemo(() => {
    return (response as { responseData?: { rows?: Category[] } })?.responseData?.rows ?? [];
  }, [response]) as Category[];

  const total = (response as { responseData?: { count?: number } })?.responseData?.count ?? 0;
  const totalPages = Math.ceil(total / PAGE_SIZE);

  const { mutateAsync: createCategory, isPending: creating } = usePostApiV10Category();
  const { mutateAsync: updateCategory, isPending: updating } = usePutApiV10CategoryId();
  const { mutateAsync: deleteCategory, isPending: deleting } = useDeleteApiV10CategoryId();

  const saving = creating || updating;

  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: ['/api/v1.0/category'] });
  };

  const onSubmit = async (data: CategoryMutate) => {
    try {
      if (editTarget?.id) {
        await updateCategory({ id: editTarget.id, data });
        toast.success('Cập nhật danh mục thành công');
      } else {
        await createCategory({ data });
        toast.success('Thêm danh mục thành công');
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
      await deleteCategory({ id: deleteTarget.id });
      toast.success('Xóa danh mục thành công');
      setDeleteTarget(null);
      invalidate();
    } catch {
      toast.error('Xóa thất bại, vui lòng thử lại');
    }
  };

  const openCreate = () => {
    setEditTarget(null);
    reset({ name: '', slug: '', type: 'gallery', url: '' });
    setFormOpen(true);
  };

  const openEdit = (c: Category) => {
    setEditTarget(c);
    reset({ name: c.name, slug: c.slug, type: c.type, url: c.url ?? '' });
    setFormOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#19426D] to-[#0f3b5a] flex items-center justify-center">
              <Folder className="h-5 w-5 text-white" />
            </div>
            Quản lý Danh mục
          </h1>
          <p className="text-sm text-slate-500 mt-1.5">
            Quản lý các danh mục hệ thống (Industry, Trade, Gallery, Post...)
          </p>
        </div>
        <Button onClick={openCreate} className="gap-2 bg-[#19426D] hover:bg-[#0f3b5a] shadow-lg shadow-[#19426D]/20">
          <Plus className="h-4 w-4" />
          Thêm danh mục
        </Button>
      </div>

      <div className="bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              value={searchName}
              onChange={(e) => { setSearchName(e.target.value); setPage(1); }}
              placeholder="Tìm kiếm theo tên danh mục..."
              className="pl-10 h-11 w-full rounded-lg border-slate-300 bg-white focus:bg-white shadow-sm"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Folder className="h-4 w-4" />
            <span className="font-medium">{total}</span> danh mục
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50/80 border-b border-slate-200">
              <TableRow className="hover:bg-slate-50/80">
                <TableHead className="w-[220px] font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    Tên danh mục
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <Hash className="h-4 w-4" />
                    Slug
                  </div>
                </TableHead>
                <TableHead className="w-[160px] font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4" />
                    Loại
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <Link2 className="h-4 w-4" />
                    URL
                  </div>
                </TableHead>
                <TableHead className="text-right w-[120px] font-semibold text-slate-700">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-slate-500">
                    Đang tải dữ liệu...
                  </TableCell>
                </TableRow>
              ) : categories.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-slate-500">
                    Chưa có danh mục nào.
                  </TableCell>
                </TableRow>
              ) : (
                categories.map((item) => {
                  const badgeStyle = getTypeBadgeVariant(item.type);
                  return (
                    <TableRow key={item.id} className="hover:bg-slate-50/50 transition-colors">
                      <TableCell className="font-semibold text-slate-900">
                        {item.name}
                      </TableCell>
                      <TableCell>
                        <code className="text-sm bg-slate-100 px-2 py-1 rounded text-slate-700 font-mono">
                          {item.slug}
                        </code>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={cn(
                            "font-medium capitalize",
                            badgeStyle.bg,
                            badgeStyle.text,
                            badgeStyle.border
                          )}
                        >
                          {item.type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {item.url ? (
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 hover:underline text-sm flex items-center gap-1 w-fit max-w-[300px] truncate"
                          >
                            <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />
                            <span className="truncate">{item.url}</span>
                          </a>
                        ) : (
                          <span className="text-slate-400 text-sm">-</span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50" 
                            onClick={() => openEdit(item)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50" 
                            onClick={() => setDeleteTarget(item)}
                          >
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
              <span className="font-medium">{total}</span> danh mục
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="h-8 border-slate-200">
                <ChevronLeft className="h-4 w-4 mr-1" /> Trước
              </Button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <Button
                    key={i}
                    variant={page === i + 1 ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPage(i + 1)}
                    className={cn("h-8 w-8 p-0", page === i + 1 ? "bg-[#19426D] hover:bg-[#0f3b5a]" : "border-slate-200")}
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

      {/* CREATE/EDIT DIALOG */}
      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              <div className={cn(
                "h-8 w-8 rounded-lg flex items-center justify-center",
                editTarget ? "bg-blue-100" : "bg-emerald-100"
              )}>
                {editTarget ? (
                  <Pencil className="h-4 w-4 text-blue-700" />
                ) : (
                  <Plus className="h-4 w-4 text-emerald-700" />
                )}
              </div>
              {editTarget ? 'Cập nhật danh mục' : 'Thêm danh mục mới'}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-slate-500" />
                Tên danh mục <span className="text-red-500">*</span>
              </Label>
              <Controller
                control={control}
                name="name"
                rules={{ required: 'Tên danh mục là bắt buộc' }}
                render={({ field }) => (
                  <Input 
                    {...field} 
                    id="name" 
                    placeholder="VD: Ngành công nghiệp" 
                    className="h-10"
                    onChange={(e) => {
                      field.onChange(e);
                      // Tự động tạo slug khi nhập tên (chỉ khi tạo mới)
                      if (!editTarget) {
                        setValue('slug', slugify(e.target.value));
                      }
                    }}
                  />
                )}
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="slug" className="flex items-center gap-2">
                <Hash className="h-4 w-4 text-slate-500" />
                Slug <span className="text-red-500">*</span>
              </Label>
              <Controller
                control={control}
                name="slug"
                rules={{ required: 'Slug là bắt buộc' }}
                render={({ field }) => (
                  <Input {...field} id="slug" placeholder="nganh-cong-nghiep" className="h-10 font-mono text-sm" />
                )}
              />
              {errors.slug && <p className="text-sm text-red-500">{errors.slug.message}</p>}
              {!editTarget && <p className="text-xs text-slate-500">Tự động tạo từ tên danh mục, có thể chỉnh sửa</p>}
            </div>

            {/* Hidden field for type */}
            <Controller
              control={control}
              name="type"
              defaultValue="gallery"
              render={({ field }) => <input type="hidden" {...field} />}
            />

            <div className="grid gap-2">
              <Label htmlFor="url" className="flex items-center gap-2">
                <Link2 className="h-4 w-4 text-slate-500" />
                Đường dẫn URL
              </Label>
              <Controller
                control={control}
                name="url"
                render={({ field }) => (
                  <Input {...field} id="url" placeholder="https://example.com" value={field.value ?? ''} className="h-10" />
                )}
              />
            </div>
            
            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button type="button" variant="outline" onClick={() => setFormOpen(false)} className="h-10">
                Hủy
              </Button>
              <Button type="submit" disabled={saving} className="bg-[#19426D] hover:bg-[#0f3b5a] h-10 min-w-[100px]">
                {saving ? 'Đang lưu...' : 'Lưu lại'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* DELETE DIALOG */}
      <AlertDialog open={!!deleteTarget} onOpenChange={(open) => !open && setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xác nhận xóa</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn có chắc chắn muốn xóa danh mục <strong>{deleteTarget?.name}</strong>? Hành động này không thể hoàn tác.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Hủy</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} disabled={deleting} className="bg-red-600 hover:bg-red-700">
              {deleting ? 'Đang xóa...' : 'Xóa'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
