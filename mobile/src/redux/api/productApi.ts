import { baseApi } from './baseApi';

export const productApi = baseApi.injectEndpoints({
  endpoints: (b) => ({
    getProducts: b.query<any, any>({ query: (params) => ({ url: '/products', params }) }),
    getProductBySlug: b.query<any, string>({ query: (slug) => ({ url: `/products/${slug}` }) })
  })
});

export const { useGetProductsQuery, useGetProductBySlugQuery } = productApi;
