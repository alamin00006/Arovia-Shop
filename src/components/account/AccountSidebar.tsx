import Link from 'next/link';

const menus = [['Profile','/account/profile'],['My Orders','/account/orders'],['Addresses','/account/addresses'],['Wishlist','/account/wishlist'],['Reviews','/account/reviews']];
export const AccountSidebar = () => <aside className='rounded-xl border p-3'>{menus.map(([n,l])=><Link key={String(l)} href={String(l)} className='block rounded p-2 text-sm hover:bg-muted'>{n}</Link>)}</aside>;
