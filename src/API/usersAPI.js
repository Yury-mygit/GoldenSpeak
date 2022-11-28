/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
   import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

   export const usersApi = createApi({
       reducerPath: 'usersApi',
       baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
       endpoints: (builder) => ({
         getAllUsers: builder.query({
           // query: (start, limit) => `posts?_start=${start}&_limit=${limit}`,
           query: ({start, limit = ''}) => `users?_start=${start}&_limit=${limit}`,
         }),
       }),
     })
   
     // Export hooks for usage in functional components, which are
   // auto-generated based on the defined endpoints
   export const { useGetAllUsersQuery} = usersApi