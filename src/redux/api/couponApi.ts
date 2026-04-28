import { baseApi } from './baseApi';
export const couponApi = baseApi.injectEndpoints({ endpoints: (b) => ({ getCoupons: b.query<any, any>({ query: (params) => ({ url: '/coupons', params }) }) }) });
export const { useGetCouponsQuery } = couponApi;
