import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout } from '../features/auth/authSlice';

const resolvedBaseUrl =
  process.env.EXPO_PUBLIC_API_BASE_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  'http://localhost:5000/api/v1';

const rawBaseQuery = fetchBaseQuery({
  baseUrl: resolvedBaseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as any)?.auth?.accessToken;
    if (token) headers.set('Authorization', `Bearer ${token}`);
    return headers;
  }
});

const baseQueryWith401: typeof rawBaseQuery = async (args, api, extra) => {
  const result = await rawBaseQuery(args, api, extra);
  if (result.error && result.error.status === 401) api.dispatch(logout());
  return result;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWith401,
  tagTypes: ['Product', 'Category', 'Brand', 'Cart', 'Wishlist', 'Order', 'Review', 'Banner', 'CMS', 'Delivery'],
  endpoints: () => ({})
});
