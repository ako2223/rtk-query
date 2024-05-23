import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000'}),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => ({
        url: '/posts',
      }),providesTags: (result) => ["Post"],

    }),
    updatePost: build.mutation({
      query: ({id, data}) => ({
        url: `posts/${id}/`,
        method: 'PUT',
        body: data, 
      }), invalidatesTags: ["Post"]
    }),
    addUser: build.mutation({
      query: (data) => ({
        url: `/users`,
        method: 'POST',
        body: data, 
      }), invalidatesTags: ["Post"]
    })
  })
})
