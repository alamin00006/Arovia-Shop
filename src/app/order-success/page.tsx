import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

export default function OrderSuccessPage({ searchParams }: { searchParams: { order?: string } }) {
  const order = searchParams.order || 'ORD-9001';
  return <><Header /><main className='container mx-auto px-4 py-12'><div className='mx-auto max-w-xl rounded-xl border p-8 text-center'><h1 className='mb-2 text-2xl font-semibold text-green-600'>Order Confirmed!</h1><p className='text-sm text-muted-foreground'>Order Number: {order}</p><p className='my-4 text-sm'>Thank you for shopping with us.</p><Link href='/track-order'><Button>Track Order</Button></Link></div></main><Footer /></>;
}
