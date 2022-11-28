import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pageApi = createApi({
    reducerPath: 'pageApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:4000/' }),
    endpoints: (builder) => ({
      getPageData: builder.query({
        // query: ({start, limit = ''}) => `posts?_start=${start}&_limit=${limit}`,
        query: () => `state`,
      }),
    }),
  })

  export const {useGetPageDataQuery} = pageApi