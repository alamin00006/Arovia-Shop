import { baseApi } from './baseApi';
export const productApi = baseApi.injectEndpoints({ endpoints: (b) => ({ getProducts: b.query<any, any>({ query: (params) => ({ url: '/products', params }) }) }) });
export const { useGetProductsQuery } = productApi;
