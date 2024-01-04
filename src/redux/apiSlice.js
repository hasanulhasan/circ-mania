import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://example.co/api/v2/' }),
  endpoints: (builder) => ({
    getRuns: builder.query({
      query: () => `/run`,
    }),
  }),
})


export const { useGetRunsQuery } = apiSlice