import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import auth from './features/auth/authSlice';
import cart from './features/cart/cartSlice';
import wishlist from './features/wishlist/wishlistSlice';
import ui from './features/ui/uiSlice';
import { baseApi } from './api/baseApi';
import { secureStorage } from '@/utils/storage';

const storage = {
  setItem: (key: string, value: string) => secureStorage.setItem(key, value),
  getItem: (key: string) => secureStorage.getItem(key),
  removeItem: (key: string) => secureStorage.removeItem(key)
};

const rootReducer = combineReducers({ auth, cart, wishlist, ui, [baseApi.reducerPath]: baseApi.reducer });
const persisted = persistReducer({ key: 'ghorerbazar-mobile', storage: storage as any, whitelist: ['auth','cart','wishlist'] }, rootReducer);

export const store = configureStore({ reducer: persisted, middleware: (gdm) => gdm({ serializableCheck: false }).concat(baseApi.middleware) });
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
