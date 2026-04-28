import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AccountSidebar } from '@/components/account/AccountSidebar';

export default function AccountOrderDetailsPage() { return <><Header /><main className='container mx-auto grid gap-6 px-4 py-6 md:grid-cols-4'><AccountSidebar /><div className='rounded-xl border p-4 md:col-span-3'><h1 className='mb-2 text-xl font-semibold'>Order Details</h1><p className='text-sm'>Order #ORD-9001</p><p className='text-sm'>Status: PROCESSING</p></div></main><Footer /></>; }
