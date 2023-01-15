import { configureStore } from '@reduxjs/toolkit'
import counterReduser from './counterSlice'

import { postsApi } from '../API/postsAPI'
import { usersApi } from '../API/usersAPI'
import { pageApi } from '../API/pageAPI'
import { tasksApi } from '../API/tasksAPI'
import { newsApi } from '../API/newsAPI'

export const store = configureStore({
  reducer: {
    counter: counterReduser,
    [pageApi.reducerPath]:pageApi.reducer,
    [postsApi.reducerPath]:postsApi.reducer,
    [usersApi.reducerPath]:usersApi.reducer,
    [tasksApi.reducerPath]:tasksApi.reducer,
    [newsApi.reducerPath]:newsApi.reducer,
  },

  
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat
  ([
    pageApi.middleware,
    postsApi.middleware,
    usersApi.middleware,
    tasksApi.middleware,
    newsApi.middleware,
  ]),

  
})