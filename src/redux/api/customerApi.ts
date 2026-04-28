import { baseApi } from './baseApi';

export const customerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getList: builder.query<any, any>({ query: (params) => ({ url: 'users', params }), providesTags: ['Resource'] }),
    getById: builder.query<any, string>({ query: (id) => ({ url: 'users/' + id }), providesTags: ['Resource'] }),
    create: builder.mutation<any, any>({ query: (body) => ({ url: 'users', method: 'POST', body }), invalidatesTags: ['Resource'] }),
    update: builder.mutation<any, { id: string; body: any }>({ query: ({ id, body }) => ({ url: 'users/' + id, method: 'PATCH', body }), invalidatesTags: ['Resource'] }),
    remove: builder.mutation<any, string>({ query: (id) => ({ url: 'users/' + id, method: 'DELETE' }), invalidatesTags: ['Resource'] })
  })
});

export const { useGetListQuery, useGetByIdQuery, useCreateMutation, useUpdateMutation, useRemoveMutation } = customerApi;
