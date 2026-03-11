'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/hooks/use-sidebar';
import useAuthStore from '@/stores/auth';
import {
  // LayoutDashboard,
  ChevronLeft,
  ChevronDown,
  Users,
  FileText,
  Settings,
  LogOut,
  Building2,
  CalendarDays,
  LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// ─── Navigation Config ─────────────────────────────────────────────────────────

interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  // {
  //   name: 'Tổng quan',
  //   href: '/admin',
  //   icon: LayoutDashboard,
  // },
  {
    name: 'Nhà tài trợ',
    href: '/admin/sponsor',
    icon: Users,
  },
  {
    name: 'Hình Ảnh Chương Trình',
    href: '/admin/gallery',
    icon: Building2,
    // children: [
    //   { name: 'Danh sách', href: '/admin/enterprises', icon: Building2 },
    //   { name: 'Nhà tài trợ', href: '/admin/sponsor', icon: Handshake },
    // ],
  },
  {
    name: 'Danh Mục',
    href: '/admin/category',
    icon: CalendarDays,
  },
  {
    name: 'Form Đăng Ký',
    href: '/admin/registration',
    icon: FileText,
  },
  {
    name:'Quản lý diễn giả',
    href: '/admin/speaker',
    icon: Users,
  },
  {
    name: 'cài đặt website',
    href: '/admin/site-setting',
    icon: Settings,
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isOpen, toggle } = useSidebarStore();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const user = useAuthStore((s) => s.user);
  const resetStore = useAuthStore((s) => s.resetStore);

  const handleLogout = () => {
    resetStore();
    router.push('/login');
  };

  const toggleExpanded = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href) ? prev.filter((i) => i !== href) : [...prev, href]
    );
  };

  const isItemActive = (item: NavItem): boolean => {
    if (item.children) {
      return item.children.some((c) => pathname === c.href || pathname.startsWith(c.href + '/'));
    }
    if (item.href === '/admin') return pathname === '/admin';
    return pathname === item.href || pathname.startsWith(item.href + '/');
  };

  const renderNavItem = (item: NavItem, depth = 0) => {
    const isActive = isItemActive(item);
    const isExpanded = expandedItems.includes(item.href);
    const hasChildren = !!item.children?.length;

    return (
      <div key={item.href}>
        <div
          className={cn(
            'group flex items-center rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer select-none',
            depth === 0 ? 'mx-2 px-3 py-2.5' : 'mx-2 ml-8 px-3 py-2',
            isActive
              ? 'bg-[#19426D] text-white shadow-md shadow-[#0f3b5a]/30'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          )}
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.href);
            } else {
              router.push(item.href);
            }
          }}
        >
          <item.icon
            className={cn(
              'flex-shrink-0 transition-colors',
              depth === 0 ? 'h-5 w-5' : 'h-4 w-4',
              isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-700'
            )}
          />
          {isOpen && (
            <>
              <span className="ml-3 truncate flex-1">{item.name}</span>
              {hasChildren && (
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform duration-200 flex-shrink-0',
                    isExpanded && 'rotate-180',
                    isActive ? 'text-white' : 'text-slate-400'
                  )}
                />
              )}
            </>
          )}
        </div>

        {/* Children */}
        {hasChildren && isExpanded && isOpen && (
          <div className="mt-0.5 space-y-0.5">
            {item.children!.map((child) => renderNavItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const userInitials = user
    ? `${user.first_name?.[0] ?? ''}${user.last_name?.[0] ?? ''}`.toUpperCase() || 'AD'
    : 'AD';

  const fullName = user
    ? `${user.first_name ?? ''} ${user.last_name ?? ''}`.trim() || 'Admin'
    : 'Admin';

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={toggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-40 h-screen flex flex-col',
          'border-r border-slate-200 bg-white',
          'transition-all duration-300 ease-in-out',
          'lg:translate-x-0',
          isOpen
            ? 'translate-x-0 w-64'
            : '-translate-x-full lg:translate-x-0 lg:w-[70px]'
        )}
      >
        {/* ── Logo / Header ── */}
        <div
          className={cn(
            'flex h-16 shrink-0 items-center border-b border-slate-200 bg-[#19426D]',
            isOpen ? 'px-4 justify-between' : 'justify-center px-2'
          )}
        >
          {isOpen && (
            <Link href="/admin" className="flex items-center gap-2 overflow-hidden">
              <Image
                src="/imgs/logo.png"
                alt="CEO VCCI"
                width={120}
                height={40}
                className="object-contain brightness-0 invert"
                priority
              />
            </Link>
          )}

          {/* Toggle button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            className={cn(
              'h-8 w-8 text-white/80 hover:bg-white/15 hover:text-white rounded-md flex-shrink-0',
              !isOpen && 'mx-auto'
            )}
          >
            <ChevronLeft
              className={cn(
                'h-4 w-4 transition-transform duration-300',
                !isOpen && 'rotate-180'
              )}
            />
          </Button>
        </div>

        {/* ── Navigation ── */}
        <nav className="flex-1 overflow-y-auto py-3 space-y-0.5">
          {/* Section label */}
          {isOpen && (
            <p className="px-5 mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Quản trị
            </p>
          )}
          {navigation.map((item) => renderNavItem(item))}
        </nav>

        <Separator className="mx-3 w-auto" />

        {/* ── User Profile ── */}
        <div className={cn('p-3', !isOpen && 'flex justify-center')}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  'flex items-center gap-2.5 w-full rounded-lg px-2 py-2',
                  'hover:bg-slate-100 transition-colors text-left',
                  !isOpen && 'justify-center w-auto'
                )}
              >
                <Avatar className="h-8 w-8 shrink-0 border-2 border-[#19426D]/20">
                  <AvatarFallback className="bg-[#19426D] text-white text-xs font-semibold">
                    {userInitials}
                  </AvatarFallback>
                </Avatar>
                {isOpen && (
                  <div className="flex-1 overflow-hidden">
                    <p className="text-sm font-semibold text-slate-800 truncate">{fullName}</p>
                    <p className="text-xs text-slate-500 truncate">{user?.email ?? 'admin@vcci.com'}</p>
                  </div>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              align={isOpen ? 'end' : 'center'}
              className="w-52"
            >
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold">{fullName}</p>
                  <p className="text-xs text-muted-foreground">{user?.email ?? 'admin@vcci.com'}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/admin/settings" className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  Cài đặt
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="text-destructive focus:text-destructive cursor-pointer"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Đăng xuất
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>
    </>
  );
}
