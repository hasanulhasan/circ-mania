import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000/run/65979fdcbb6b18fab08aac38' }),
  tagTypes: ['runs'],
  endpoints: (builder) => ({
    getInnings: builder.query({
      query: () => `/`,
      providesTags: ['runs']
    }),
    updateInnings: builder.mutation({
      query: (data) => ({
        url: '',
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['runs']
    }),
  }),
})


export const { useGetInningsQuery, useUpdateInningsMutation } = apiSlice