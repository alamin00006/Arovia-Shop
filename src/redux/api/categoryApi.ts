import { baseApi } from './baseApi';
export const categoryApi = baseApi.injectEndpoints({ endpoints: (b) => ({ getCategorys: b.query<any, any>({ query: (params) => ({ url: '/categorys', params }) }) }) });
export const { useGetCategorysQuery } = categoryApi;
