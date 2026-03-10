'use client';

import { AdminSidebar } from '@/components/admin/admin-sidebar';
import { useSidebarStore } from '@/hooks/use-sidebar';
import { cn } from '@/lib/utils';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen } = useSidebarStore();

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminSidebar />

      {/* Main content area — offset by sidebar width */}
      <main
        className={cn(
          'transition-all duration-300 ease-in-out min-h-screen',
          isOpen ? 'lg:ml-64' : 'lg:ml-[70px]'
        )}
      >
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
