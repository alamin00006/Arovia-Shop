import { baseApi } from './baseApi';
export const cartApi = baseApi.injectEndpoints({ endpoints: (b) => ({ getCarts: b.query<any, any>({ query: (params) => ({ url: '/carts', params }) }) }) });
export const { useGetCartsQuery } = cartApi;
