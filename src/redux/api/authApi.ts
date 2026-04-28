import { baseApi } from './baseApi';
export const authApi = baseApi.injectEndpoints({ endpoints: (b) => ({ getAuths: b.query<any, any>({ query: (params) => ({ url: '/auths', params }) }) }) });
export const { useGetAuthsQuery } = authApi;
