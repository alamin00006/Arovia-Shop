'use client';

import { useAppSelector } from '@/redux/hooks';
import { AdminHeader } from './AdminHeader';
import { AdminSidebar } from './AdminSidebar';

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const sidebarOpen = useAppSelector((s) => s.ui.sidebarOpen);
  return (
    <div className='flex min-h-screen'>
      {sidebarOpen && <AdminSidebar />}
      <div className='flex-1'>
        <AdminHeader />
        <main className='p-4 md:p-6'>{children}</main>
      </div>
    </div>
  );
};
