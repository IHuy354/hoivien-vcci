'use client';

import { useState, useMemo } from 'react';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';

import {
  useGetApiV10Sponsor,
  usePostApiV10Sponsor,
  usePutApiV10SponsorId,
  useDeleteApiV10SponsorId,
} from '@/api/endpoints/sponsor';
import type { Sponsor } from '@/api/models/sponsor';
import type { SponsorMutate } from '@/api/models/sponsorMutate';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
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
  Trophy,
  Globe,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Imports from _components
import { CURRENT_YEAR, PAGE_SIZE, TIER_OPTIONS, YEAR_OPTIONS } from './_components/constants';
import { TierBadge } from './_components/tier-badge';
import { SponsorLogo } from './_components/sponsor-logo';
import { SponsorFormDialog } from './_components/sponsor-form-dialog';

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function SponsorManagementPage() {
  const queryClient = useQueryClient();

  // ── Filters ──
  const [searchName, setSearchName] = useState('');
  const [tierFilter, setTierFilter]   = useState<string>('all');
  const [yearFilter, setYearFilter]   = useState<string>(String(CURRENT_YEAR));
  const [page, setPage] = useState(1);

  // ── Dialogs ──
  const [formOpen,   setFormOpen]   = useState(false);
  const [editTarget, setEditTarget] = useState<Sponsor | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Sponsor | null>(null);

  // ── Build query params ──
  const queryParams = useMemo(() => {
    const filters: string[] = [];
    if (tierFilter !== 'all') filters.push(`tier==${tierFilter}`);
    if (yearFilter !== 'all') filters.push(`year==${yearFilter}`);
    if (searchName.trim())    filters.push(`name==%${searchName.trim()}%`);
    return {
      page,
      pageSize: PAGE_SIZE,
      sortField: 'sort_order',
      sortOrder: 'asc' as const,
      ...(filters.length ? { filters: filters.join(';') } : {}),
    };
  }, [page, tierFilter, yearFilter, searchName]);

  // ── Data ──
  const { data: response, isLoading, refetch } = useGetApiV10Sponsor(queryParams);

  const sponsors: Sponsor[] = useMemo(() => {
    const rows = (response as { responseData?: { rows?: Sponsor[] } })?.responseData?.rows ?? [];
    return rows as Sponsor[];
  }, [response]);

  const total: number = (response as { responseData?: { count?: number } })?.responseData?.count ?? 0;
  const totalPages = Math.ceil(total / PAGE_SIZE);

  // ── Mutations ──
  const { mutateAsync: createSponsor, isPending: creating } = usePostApiV10Sponsor();
  const { mutateAsync: updateSponsor, isPending: updating } = usePutApiV10SponsorId();
  const { mutateAsync: deleteSponsor, isPending: deleting } = useDeleteApiV10SponsorId();

  const saving = creating || updating;

  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: ['/api/v1.0/sponsor'] });
  };

  const handleSave = async (data: SponsorMutate, id?: string) => {
    try {
      if (id) {
        await updateSponsor({ id, data });
        toast.success('Cập nhật nhà tài trợ thành công');
      } else {
        await createSponsor({ data });
        toast.success('Thêm nhà tài trợ thành công');
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
      await deleteSponsor({ id: deleteTarget.id });
      toast.success('Xóa nhà tài trợ thành công');
      setDeleteTarget(null);
      invalidate();
    } catch {
      toast.error('Xóa thất bại, vui lòng thử lại');
    }
  };

  const openCreate = () => { setEditTarget(null); setFormOpen(true); };
  const openEdit   = (s: Sponsor) => { setEditTarget(s); setFormOpen(true); };

  // ── Stats ──
  const statsByTier = useMemo(() => {
    return TIER_OPTIONS.map((t) => ({
      ...t,
      count: sponsors.filter((s) => s.tier === t.value && s.is_active).length,
    }));
  }, [sponsors]);

  return (
    <div className="space-y-6">
      {/* ── Page Header ── */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Quản lý Nhà Tài Trợ</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Quản lý danh sách nhà tài trợ hiển thị trên trang chủ
          </p>
        </div>
        <Button onClick={openCreate} className="gap-2 bg-[#19426D] hover:bg-[#0f3b5a]">
          <Plus className="h-4 w-4" />
          Thêm nhà tài trợ
        </Button>
      </div>

      {/* ── Stats Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {statsByTier.map((tier) => {
          const Icon = tier.icon;
          return (
            <div key={tier.value} className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-4 shadow-sm">
              <div className={cn('h-12 w-12 rounded-xl flex items-center justify-center', tier.color)}>
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">{tier.count}</p>
                <p className="text-sm text-slate-500">{tier.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Filters ── */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              value={searchName}
              onChange={(e) => { setSearchName(e.target.value); setPage(1); }}
              placeholder="Tìm kiếm theo tên..."
              className="pl-9"
            />
          </div>

          {/* Tier filter */}
          <Select value={tierFilter} onValueChange={(v) => { setTierFilter(v); setPage(1); }}>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Hạng tài trợ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả hạng</SelectItem>
              {TIER_OPTIONS.map((t) => (
                <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Year filter */}
          <Select value={yearFilter} onValueChange={(v) => { setYearFilter(v); setPage(1); }}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Năm" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả năm</SelectItem>
              {YEAR_OPTIONS.map((y) => (
                <SelectItem key={y} value={String(y)}>{y}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button variant="outline" size="icon" onClick={() => refetch()} title="Làm mới">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* ── Table ── */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50 hover:bg-slate-50">
              <TableHead className="w-20 text-center">Logo</TableHead>
              <TableHead>Tên nhà tài trợ</TableHead>
              <TableHead className="w-44">Hạng</TableHead>
              <TableHead className="w-24 text-center">Năm</TableHead>
              <TableHead className="w-24 text-center">Thứ tự</TableHead>
              <TableHead className="w-28 text-center">Trạng thái</TableHead>
              <TableHead className="w-32 text-center">Website</TableHead>
              <TableHead className="w-28 text-center">Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}>
                  {Array.from({ length: 8 }).map((_, j) => (
                    <TableCell key={j}>
                      <Skeleton className="h-5 w-full rounded" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : sponsors.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-16 text-slate-400">
                  <div className="flex flex-col items-center gap-2">
                    <Trophy className="h-10 w-10 text-slate-300" />
                    <p className="font-medium">Chưa có nhà tài trợ nào</p>
                    <p className="text-sm">Nhấn &quot;Thêm nhà tài trợ&quot; để bắt đầu</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              sponsors.map((sponsor) => (
                <TableRow key={sponsor.id} className="hover:bg-slate-50/50">
                  <TableCell className="text-center">
                    <div className="flex justify-center">
                      <SponsorLogo logoId={sponsor.logo.path} name={sponsor.name} />
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="font-semibold text-slate-800">{sponsor.name}</p>
                  </TableCell>
                  <TableCell>
                    <TierBadge tier={sponsor.tier} />
                  </TableCell>
                  <TableCell className="text-center text-slate-600 font-medium">
                    {sponsor.year}
                  </TableCell>
                  <TableCell className="text-center text-slate-500">
                    {sponsor.sort_order ?? 0}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={sponsor.is_active ? 'default' : 'secondary'}
                      className={cn(
                        'text-xs',
                        sponsor.is_active
                          ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
                          : 'bg-slate-100 text-slate-500 border border-slate-200'
                      )}
                    >
                      {sponsor.is_active ? 'Hiển thị' : 'Đã ẩn'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    {sponsor.website_url ? (
                      <a
                        href={sponsor.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#19426D] hover:underline"
                      >
                        <Globe className="h-3 w-3" />
                        Truy cập
                      </a>
                    ) : (
                      <span className="text-xs text-slate-300">—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-1.5">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 hover:bg-blue-50 hover:text-blue-600"
                        onClick={() => openEdit(sponsor)}
                        title="Chỉnh sửa"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 hover:bg-red-50 hover:text-red-600"
                        onClick={() => setDeleteTarget(sponsor)}
                        title="Xóa"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="border-t border-slate-100 px-4 py-3 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Hiển thị{' '}
              <span className="font-medium text-slate-800">
                {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, total)}
              </span>{' '}
              / <span className="font-medium text-slate-800">{total}</span> nhà tài trợ
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium text-slate-700 min-w-[60px] text-center">
                {page} / {totalPages}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* ── Form Dialog ── */}
      <SponsorFormDialog
        open={formOpen}
        onClose={() => { setFormOpen(false); setEditTarget(null); }}
        initial={editTarget}
        onSave={handleSave}
        saving={saving}
      />

      {/* ── Delete Confirm ── */}
      <AlertDialog open={!!deleteTarget} onOpenChange={(o) => !o && setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xóa nhà tài trợ?</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn có chắc muốn xóa <strong>{deleteTarget?.name}</strong>? Hành động này không thể
              hoàn tác.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Hủy</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={deleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleting ? 'Đang xóa...' : 'Xóa'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
