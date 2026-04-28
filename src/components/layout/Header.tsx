'use client';
import Link from 'next/link';
import { Heart, Menu, Search, ShoppingCart, User } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleCartDrawer, toggleMobileMenu } from '@/redux/features/ui/uiSlice';

export const Header = () => {
  const cartCount = useAppSelector((s) => s.cart.items.length);
  const wishCount = useAppSelector((s) => s.wishlist.items.length);
  const dispatch = useAppDispatch();
  return (
    <header className='sticky top-0 z-40 border-b bg-background/95 backdrop-blur'>
      <div className='bg-primary py-2 text-center text-xs text-primary-foreground'>Fresh groceries delivered within hours 🚚</div>
      <div className='container mx-auto flex items-center gap-3 px-4 py-3'>
        <button className='md:hidden' onClick={() => dispatch(toggleMobileMenu())}><Menu className='h-5 w-5' /></button>
        <Link href='/' className='text-lg font-bold text-primary'>GhorerFresh</Link>
        <div className='relative hidden flex-1 md:block'><Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground'/><input className='h-10 w-full rounded-md border pl-9 pr-3 text-sm' placeholder='Search grocery products...' /></div>
        <div className='ml-auto flex items-center gap-2'>
          <Link href='/account/wishlist' className='relative rounded-md p-2 hover:bg-muted'><Heart className='h-5 w-5' /><span className='absolute -right-1 -top-1 rounded-full bg-primary px-1 text-[10px] text-white'>{wishCount}</span></Link>
          <button onClick={() => dispatch(toggleCartDrawer())} className='relative rounded-md p-2 hover:bg-muted'><ShoppingCart className='h-5 w-5' /><span className='absolute -right-1 -top-1 rounded-full bg-primary px-1 text-[10px] text-white'>{cartCount}</span></button>
          <Link href='/login' className='rounded-md p-2 hover:bg-muted'><User className='h-5 w-5' /></Link>
        </div>
      </div>
    </header>
  );
};
