'use client';

import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleSidebar } from '@/redux/features/ui/uiSlice';
import { Button } from '../ui/button';
import { logout } from '@/redux/features/auth/authSlice';

export const AdminHeader = () => {
  const { theme, setTheme } = useTheme();
  const dispatch = useAppDispatch();
  const user = useAppSelector((s) => s.auth.user);

  return (
    <header className='flex h-16 items-center justify-between border-b border-border bg-card px-4'>
      <Button variant='ghost' onClick={() => dispatch(toggleSidebar())}><Menu className='h-4 w-4' /></Button>
      <div className='flex items-center gap-2'>
        <Button variant='ghost' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <Sun className='h-4 w-4' /> : <Moon className='h-4 w-4' />}
        </Button>
        <span className='text-sm'>{user?.name}</span>
        <Button variant='outline' onClick={() => dispatch(logout())}>Logout</Button>
      </div>
    </header>
  );
};
