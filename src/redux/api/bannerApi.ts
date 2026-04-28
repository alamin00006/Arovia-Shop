import { baseApi } from './baseApi';
export const bannerApi = baseApi.injectEndpoints({ endpoints: (b) => ({ getBanners: b.query<any, any>({ query: (params) => ({ url: '/banners', params }) }) }) });
export const { useGetBannersQuery } = bannerApi;
