import { baseApi } from './baseApi';

export const settingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getList: builder.query<any, any>({ query: (params) => ({ url: 'settings', params }), providesTags: ['Resource'] }),
    getById: builder.query<any, string>({ query: (id) => ({ url: 'settings/' + id }), providesTags: ['Resource'] }),
    create: builder.mutation<any, any>({ query: (body) => ({ url: 'settings', method: 'POST', body }), invalidatesTags: ['Resource'] }),
    update: builder.mutation<any, { id: string; body: any }>({ query: ({ id, body }) => ({ url: 'settings/' + id, method: 'PATCH', body }), invalidatesTags: ['Resource'] }),
    remove: builder.mutation<any, string>({ query: (id) => ({ url: 'settings/' + id, method: 'DELETE' }), invalidatesTags: ['Resource'] })
  })
});

export const { useGetListQuery, useGetByIdQuery, useCreateMutation, useUpdateMutation, useRemoveMutation } = settingsApi;
