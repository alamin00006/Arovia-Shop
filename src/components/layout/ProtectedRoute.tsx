'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAppSelector } from '@/redux/hooks';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useAppSelector((s) => s.auth);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuthenticated && pathname !== '/login' && pathname !== '/forgot-password') {
      router.replace('/login');
      return;
    }
    if (isAuthenticated && user && !['ADMIN','STAFF'].includes(user.role)) {
      router.replace('/login');
    }
  }, [isAuthenticated, user, pathname, router]);

  return <>{children}</>;
};
