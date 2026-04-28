import { baseApi } from './baseApi';

export const reportApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getList: builder.query<any, any>({ query: (params) => ({ url: 'reports', params }), providesTags: ['Resource'] }),
    getById: builder.query<any, string>({ query: (id) => ({ url: 'reports/' + id }), providesTags: ['Resource'] }),
    create: builder.mutation<any, any>({ query: (body) => ({ url: 'reports', method: 'POST', body }), invalidatesTags: ['Resource'] }),
    update: builder.mutation<any, { id: string; body: any }>({ query: ({ id, body }) => ({ url: 'reports/' + id, method: 'PATCH', body }), invalidatesTags: ['Resource'] }),
    remove: builder.mutation<any, string>({ query: (id) => ({ url: 'reports/' + id, method: 'DELETE' }), invalidatesTags: ['Resource'] })
  })
});

export const { useGetListQuery, useGetByIdQuery, useCreateMutation, useUpdateMutation, useRemoveMutation } = reportApi;
