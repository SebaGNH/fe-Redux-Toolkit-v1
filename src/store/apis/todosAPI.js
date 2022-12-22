import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({

  reducerPath:'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  endpoints:(builder) => ({
    getTodos: builder.query({ //useGetTodosQuery
      query: () => '/todos'  //concatenamos con baseURL
    }),
    getTodo: builder.query({ //"getTodo" sin S // useGetTodoQuery
      query: (todoId) => `/todos/${todoId}`  
    }),
  })

})

export const {useGetTodosQuery, useGetTodoQuery} = todosApi;



