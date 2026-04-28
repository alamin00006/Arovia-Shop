import { baseApi } from './baseApi';

export const inventoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getList: builder.query<any, any>({ query: (params) => ({ url: 'inventory', params }), providesTags: ['Resource'] }),
    getById: builder.query<any, string>({ query: (id) => ({ url: 'inventory/' + id }), providesTags: ['Resource'] }),
    create: builder.mutation<any, any>({ query: (body) => ({ url: 'inventory', method: 'POST', body }), invalidatesTags: ['Resource'] }),
    update: builder.mutation<any, { id: string; body: any }>({ query: ({ id, body }) => ({ url: 'inventory/' + id, method: 'PATCH', body }), invalidatesTags: ['Resource'] }),
    remove: builder.mutation<any, string>({ query: (id) => ({ url: 'inventory/' + id, method: 'DELETE' }), invalidatesTags: ['Resource'] })
  })
});

export const { useGetListQuery, useGetByIdQuery, useCreateMutation, useUpdateMutation, useRemoveMutation } = inventoryApi;
