'use client';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleCartDrawer } from '@/redux/features/ui/uiSlice';
import { useCart } from '@/hooks/useCart';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';

export const CartDrawer = () => {
  const open = useAppSelector((s) => s.ui.cartDrawerOpen);
  const { cart, updateItemQty, removeItem } = useCart();
  const dispatch = useAppDispatch();
  if (!open) return null;
  const subtotal = cart.items.reduce((sum, i) => sum + (i.product.salePrice ?? i.product.regularPrice) * i.quantity, 0);
  return <div className='fixed inset-0 z-50 bg-black/40' onClick={() => dispatch(toggleCartDrawer())}><aside className='ml-auto h-full w-full max-w-md bg-background p-4' onClick={(e)=>e.stopPropagation()}><h3 className='mb-3 font-semibold'>Your Cart</h3>{cart.items.map((i)=><CartItem key={i.productId} item={i} onUpdate={(q)=>updateItemQty(i.productId,q)} onRemove={()=>removeItem(i.productId)} />)}<CartSummary subtotal={subtotal} /></aside></div>;
};
