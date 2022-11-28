/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
      getAllPosts: builder.query({
        // query: (start, limit) => `posts?_start=${start}&_limit=${limit}`,
        query: ({start, limit = ''}) => `posts?_start=${start}&_limit=${limit}`,
      }),
    }),
  })

  // Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPostsQuery} = postsApi