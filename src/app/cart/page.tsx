'use client';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useCart } from '@/hooks/useCart';
import { CartItem } from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/CartSummary';
import { EmptyState } from '@/components/shared/EmptyState';

export default function CartPage() {
  const { cart, updateItemQty, removeItem } = useCart();
  const subtotal = cart.items.reduce((sum, i) => sum + (i.product.salePrice ?? i.product.regularPrice) * i.quantity, 0);
  return <><Header /><main className='container mx-auto px-4 py-6'><h1 className='mb-4 text-2xl font-semibold'>Shopping Cart</h1>{cart.items.length===0 ? <EmptyState title='Your cart is empty' /> : <div className='grid gap-6 lg:grid-cols-3'><div className='lg:col-span-2'>{cart.items.map((item)=><CartItem key={item.productId} item={item} onUpdate={(q)=>updateItemQty(item.productId,q)} onRemove={()=>removeItem(item.productId)} />)}</div><CartSummary subtotal={subtotal} /></div>}</main><Footer /></>;
}
