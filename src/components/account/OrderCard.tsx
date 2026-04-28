import Link from 'next/link';
import { Order } from '@/types/order.type';

export const OrderCard = ({ order }: { order: Order }) => <div className='rounded-xl border p-4'><div className='flex items-center justify-between'><h3 className='font-semibold'>{order.orderNumber}</h3><span className='text-xs'>{order.orderStatus}</span></div><p className='text-sm text-muted-foreground'>Total: ৳{order.total}</p><Link href={`/account/orders/${order.id}`} className='mt-2 inline-block text-sm text-primary underline'>View details</Link></div>;
