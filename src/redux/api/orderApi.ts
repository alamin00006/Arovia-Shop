import { baseApi } from './baseApi';
export const orderApi = baseApi.injectEndpoints({ endpoints: (b) => ({ getOrders: b.query<any, any>({ query: (params) => ({ url: '/orders', params }) }) }) });
export const { useGetOrdersQuery } = orderApi;
