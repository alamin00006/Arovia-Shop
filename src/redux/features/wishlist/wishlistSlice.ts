import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'wishlist',
  initialState: { items: [] as string[] },
  reducers: { toggleWishlist: (state, action: PayloadAction<string>) => { state.items = state.items.includes(action.payload) ? state.items.filter((i) => i !== action.payload) : [...state.items, action.payload]; } }
});

export const { toggleWishlist } = slice.actions;
export default slice.reducer;
