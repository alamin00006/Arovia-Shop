import { baseApi } from './baseApi';
export const reviewApi = baseApi.injectEndpoints({ endpoints: (b) => ({ getReviews: b.query<any, any>({ query: (params) => ({ url: '/reviews', params }) }) }) });
export const { useGetReviewsQuery } = reviewApi;
