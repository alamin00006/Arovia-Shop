import { baseApi } from './baseApi';
export const wishlistApi = baseApi.injectEndpoints({ endpoints: (b) => ({ getWishlists: b.query<any, any>({ query: (params) => ({ url: '/wishlists', params }) }) }) });
export const { useGetWishlistsQuery } = wishlistApi;
