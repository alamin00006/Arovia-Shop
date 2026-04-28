import { baseApi } from './baseApi';
export const deliveryApi = baseApi.injectEndpoints({ endpoints: (b) => ({ getDeliverys: b.query<any, any>({ query: (params) => ({ url: '/deliverys', params }) }) }) });
export const { useGetDeliverysQuery } = deliveryApi;
