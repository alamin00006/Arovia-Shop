import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from '@/types/auth.type';

const initialState: AuthState = { user: null, accessToken: null, isAuthenticated: false };

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{ user: User; token: string }>) => { state.user = action.payload.user; state.accessToken = action.payload.token; state.isAuthenticated = true; },
    logout: () => initialState
  }
});

export const { setAuth, logout } = slice.actions;
export default slice.reducer;
