import { baseApi } from './baseApi';
export const brandApi = baseApi.injectEndpoints({ endpoints: (b) => ({ getBrands: b.query<any, any>({ query: (params) => ({ url: '/brands', params }) }) }) });
export const { useGetBrandsQuery } = brandApi;
