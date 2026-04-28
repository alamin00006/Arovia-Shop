import { ScrollView, View } from 'react-native';
import { useCart } from '@/hooks/useCart';
import { CartItem } from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/CartSummary';
import { EmptyState } from '@/components/common/EmptyState';

export const CartScreen = ({ navigation }: any) => {
  const { cart, updateQty, removeItem } = useCart();
  const subtotal = cart.items.reduce((s, i) => s + (i.product.salePrice ?? i.product.regularPrice) * i.quantity, 0);
  if (!cart.items.length) return <EmptyState title='Your cart is empty' />;
  return <ScrollView contentContainerStyle={{ padding:16, gap:12 }}>{cart.items.map((item) => <CartItem key={item.productId} item={item} onInc={() => updateQty(item.productId, item.quantity + 1)} onDec={() => updateQty(item.productId, Math.max(1, item.quantity - 1))} onRemove={() => removeItem(item.productId)} />)}<CartSummary subtotal={subtotal} onCheckout={() => navigation.navigate('Checkout')} /></ScrollView>;
};
