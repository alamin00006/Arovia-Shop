import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addToCart, removeFromCart, updateQuantity } from '@/redux/features/cart/cartSlice';
export const useCart = () => { const dispatch = useAppDispatch(); const cart = useAppSelector((s) => s.cart); return { cart, addItem: (p: any) => dispatch(addToCart(p)), removeItem: (id: string) => dispatch(removeFromCart(id)), updateQty: (productId: string, quantity: number) => dispatch(updateQuantity({ productId, quantity })) }; };
