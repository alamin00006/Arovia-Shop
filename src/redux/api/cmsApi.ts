import { baseApi } from './baseApi';
export const cmsApi = baseApi.injectEndpoints({ endpoints: (b) => ({ getCmss: b.query<any, any>({ query: (params) => ({ url: '/cmss', params }) }) }) });
export const { useGetCmssQuery } = cmsApi;
