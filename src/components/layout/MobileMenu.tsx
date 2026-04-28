'use client';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleMobileMenu } from '@/redux/features/ui/uiSlice';

export const MobileMenu = () => {
  const open = useAppSelector((s) => s.ui.mobileMenuOpen);
  const dispatch = useAppDispatch();
  if (!open) return null;
  return <div className='fixed inset-0 z-50 bg-black/40 md:hidden' onClick={() => dispatch(toggleMobileMenu())}><div className='h-full w-72 bg-card p-4' onClick={(e)=>e.stopPropagation()}><div className='space-y-2'>{['Home','Shop','Track Order','About','Contact'].map((m)=><Link key={m} href={m==='Home'?'/':`/${m.toLowerCase().replace(' ','-')}`} className='block rounded p-2 hover:bg-muted'>{m}</Link>)}</div></div></div>;
};
