'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const menu = [
  ['Dashboard','/dashboard'],['Products','/products'],['Categories','/categories'],['Brands','/brands'],['Orders','/orders'],['Customers','/customers'],['Coupons','/coupons'],['Flash Sales','/flash-sales'],['Bundles','/bundles'],['Reviews','/reviews'],['Banners','/banners'],['CMS','/cms'],['Delivery','/delivery'],['Inventory','/inventory'],['Reports','/reports'],['Settings','/settings']
];

export const AdminSidebar = () => {
  const pathname = usePathname();
  return (
    <aside className='w-64 shrink-0 border-r border-border bg-card p-4'>
      <h2 className='mb-4 text-lg font-semibold'>GhorerBazar</h2>
      <nav className='space-y-1'>
        {menu.map(([label, href]) => (
          <Link key={href} href={href} className={cn('block rounded-md px-3 py-2 text-sm hover:bg-muted', pathname === href && 'bg-muted font-medium')}>
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
