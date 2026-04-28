import { Product } from './product.type';
export interface CartItem { productId: string; product: Product; quantity: number; }
export interface CartState { items: CartItem[]; couponCode?: string | null; }
