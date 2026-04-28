import { formatCurrency } from '@/lib/formatters';
import { useCart } from '@/hooks/useCart';

export const OrderSummary = () => {
  const { cart } = useCart();
  const subtotal = cart.items.reduce((s, i) => s + (i.product.salePrice ?? i.product.regularPrice) * i.quantity, 0);
  return <div className='rounded-xl border p-4'><h3 className='mb-3 font-semibold'>Order Summary</h3>{cart.items.map((i)=><div key={i.productId} className='mb-1 flex justify-between text-sm'><span>{i.product.name} x {i.quantity}</span><span>{formatCurrency((i.product.salePrice ?? i.product.regularPrice) * i.quantity)}</span></div>)}<div className='mt-3 border-t pt-2 font-semibold'>Total: {formatCurrency(subtotal)}</div></div>;
};
