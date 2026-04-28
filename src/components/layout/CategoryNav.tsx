import Link from 'next/link';
const categories = ['Fruits', 'Vegetables', 'Meat', 'Fish', 'Dairy', 'Snacks'];
export const CategoryNav = () => <nav className='hidden border-y bg-card md:block'><div className='container mx-auto flex gap-6 px-4 py-3 text-sm'>{categories.map((c)=><Link key={c} href='/shop' className='hover:text-primary'>{c}</Link>)}</div></nav>;
