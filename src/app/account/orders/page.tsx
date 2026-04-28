import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AccountSidebar } from '@/components/account/AccountSidebar';
import { OrderCard } from '@/components/account/OrderCard';

const orders = [{ id: '1', orderNumber: 'ORD-9001', orderStatus: 'PROCESSING', paymentStatus: 'UNPAID', total: 890, createdAt: '', items: [] }];

export default function AccountOrdersPage() { return <><Header /><main className='container mx-auto grid gap-6 px-4 py-6 md:grid-cols-4'><AccountSidebar /><div className='space-y-3 md:col-span-3'><h1 className='text-2xl font-semibold'>My Orders</h1>{orders.map((o)=> <OrderCard key={o.id} order={o as any} />)}</div></main><Footer /></>; }
