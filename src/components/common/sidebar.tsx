'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/hooks/use-sidebar';
import { useState } from 'react';

import {
  LayoutDashboard,
  ChevronLeft,
  ChevronDown,
  // Image as ImageIcon,
  LucideIcon,
  Target,
  Calendar,
  // Bell,
  ClipboardCheck,
  FolderOpen,
  // User,
  BarChart3,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface NavigationItem {
  name: string;
  href: string;
  icon: LucideIcon;
  children?: NavigationItem[];
}

const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Dự án', href: '/projects', icon: Target },
  { name: 'Bài tập', href: '/tasks', icon: ClipboardCheck },
  { name: 'Điểm danh', href: '/attendance', icon: ClipboardCheck },
  { name: 'Lịch làm việc', href: '/schedule', icon: Calendar },
  { name: 'Báo cáo', href: '/reports', icon: BarChart3 },
  { name: 'Tài liệu', href: '/documents', icon: FolderOpen },
  // { name: 'Hồ sơ', href: '/profile', icon: User },
];

export function Sidebar() {
  const pathname = usePathname();
  const { isOpen, toggle } = useSidebarStore();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (href: string) => {
    setExpandedItems(prev => 
      prev.includes(href) 
        ? prev.filter(item => item !== href)
        : [...prev, href]
    );
  };

  const renderNavItem = (item: NavigationItem, depth = 0) => {
    const isActive = pathname === item.href || (item.children && item.children.some(child => pathname.startsWith(child.href)));
    const isExpanded = expandedItems.includes(item.href);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.name}>
        <div
          className={cn(
            'group flex items-center rounded-sm text-sm font-medium transition-all duration-200',
            depth === 0 ? 'px-4 py-3' : 'px-6 py-2 ml-6',
            isActive
              ? 'bg-[#19426D] text-white shadow-lg shadow-[#0f3b5a]/25'
              : 'text-muted-foreground hover:bg-[#0f3b5a]/6 hover:text-black dark:hover:bg-[#0f3b5a]/30 dark:hover:text-[#0f3b5a]',
            !isOpen && depth === 0 && 'justify-center'
          )}
        >
          {hasChildren ? (
            <button
              onClick={() => toggleExpanded(item.href)}
              className="flex items-center space-x-3 w-full"
            >
              <item.icon className={cn(
                'h-5 w-5 flex-shrink-0 transition-colors',
                isActive ? 'text-white' : 'group-hover:text-black dark:group-hover:text-[#0f3b5a]'
              )} />
              {isOpen && (
                <>
                  <span className="truncate flex-1 text-left">{item.name}</span>
                  <ChevronDown className={cn(
                    'h-4 w-4 transition-transform',
                    isExpanded && 'rotate-180'
                  )} />
                </>
              )}
            </button>
          ) : (
            <Link href={item.href} className="flex items-center space-x-3 w-full">
              <item.icon className={cn(
                'h-5 w-5 flex-shrink-0 transition-colors',
                isActive ? 'text-white' : 'group-hover:text-black dark:group-hover:text-[#0f3b5a]'
              )} />
              {isOpen && <span className="truncate">{item.name}</span>}
            </Link>
          )}
        </div>

        {/* Render children if expanded */}
        {hasChildren && isExpanded && isOpen && (
          <div className="mt-1 space-y-1">
            {item.children!.map(child => renderNavItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 lg:hidden" 
          onClick={toggle}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-40 h-screen border-r bg-card transition-all duration-300',
          'lg:translate-x-0', // Always visible on desktop
          isOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0 lg:w-20'
        )}
      >
      <div className="flex h-full flex-col">
        {/* Logo & Header */}
        <div className="flex h-20 items-center justify-between px-4 bg-white">
          {isOpen && (
            <Link href="/dashboard" className="flex items-center space-x-1">
              {/* Put your company logo file in /public/logo.png or change the src below */}
              <Image
                src="/images/logo.jpg"
                alt="SMEQ Logo"
                width={170}
                height={170}
                className="rounded-xl object-cover"
                priority
              />
            </Link>
          )}
          {/* {!isOpen && (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg mx-auto">
              <div className="text-white font-bold text-lg">SM</div>
            </div>
          )} */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            className="group ml-auto text-black hover:bg-[#0e3449] hover:text-white border bg-white"
          >
            <ChevronLeft
              className={cn(
                'h-5 w-5 transition-transform group-hover:text-white text-black',
                !isOpen && 'rotate-180'
              )}
            />
          </Button>
        </div>

        <Separator />

        {/* Navigation */}
        <nav className="flex-1 space-y-2 py-4 bg-white">
          {navigation.map((item) => renderNavItem(item))}
        </nav>

        {/* Footer */}
        <div className="border-t bg-white dark:bg-[#0f3b5a]/30 p-4">
          <div className={cn(
            'text-xs text-muted-foreground', 
            !isOpen && 'text-center'
          )}>
            {isOpen ? (
              <div className="space-y-1">
                <div className="font-medium text-black dark:text-gray-300">SMEQ System</div>
                <div className='text-black'>© 2026 All rights reserved</div>
              </div>
            ) : (
              <div className="text-xs text-black">©</div>
            )}
          </div>
        </div>
      </div>
    </aside>
    </>
  );
}
