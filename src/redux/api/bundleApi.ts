import { baseApi } from './baseApi';

export const bundleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getList: builder.query<any, any>({ query: (params) => ({ url: 'bundles', params }), providesTags: ['Resource'] }),
    getById: builder.query<any, string>({ query: (id) => ({ url: 'bundles/' + id }), providesTags: ['Resource'] }),
    create: builder.mutation<any, any>({ query: (body) => ({ url: 'bundles', method: 'POST', body }), invalidatesTags: ['Resource'] }),
    update: builder.mutation<any, { id: string; body: any }>({ query: ({ id, body }) => ({ url: 'bundles/' + id, method: 'PATCH', body }), invalidatesTags: ['Resource'] }),
    remove: builder.mutation<any, string>({ query: (id) => ({ url: 'bundles/' + id, method: 'DELETE' }), invalidatesTags: ['Resource'] })
  })
});

export const { useGetListQuery, useGetByIdQuery, useCreateMutation, useUpdateMutation, useRemoveMutation } = bundleApi;
