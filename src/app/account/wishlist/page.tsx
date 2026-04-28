import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AccountSidebar } from '@/components/account/AccountSidebar';
import { ProductGrid } from '@/components/product/ProductGrid';
import { mockProducts } from '@/lib/constants';

export default function AccountWishlistPage() { return <><Header /><main className='container mx-auto grid gap-6 px-4 py-6 md:grid-cols-4'><AccountSidebar /><div className='md:col-span-3'><h1 className='mb-4 text-2xl font-semibold'>Wishlist</h1><ProductGrid products={mockProducts.slice(0,2)} /></div></main><Footer /></>; }
