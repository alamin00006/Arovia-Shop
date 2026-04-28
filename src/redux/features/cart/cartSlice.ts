import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from '@/types/cart.type';

const initialState: CartState = { items: [], couponCode: null };

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const found = state.items.find((i) => i.productId === action.payload.productId);
      if (found) found.quantity += action.payload.quantity;
      else state.items.push(action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => { const item = state.items.find((i) => i.productId === action.payload.productId); if (item) item.quantity = action.payload.quantity; },
    removeFromCart: (state, action: PayloadAction<string>) => { state.items = state.items.filter((i) => i.productId !== action.payload); }
  }
});

export const { addToCart, updateQuantity, removeFromCart } = slice.actions;
export default slice.reducer;
