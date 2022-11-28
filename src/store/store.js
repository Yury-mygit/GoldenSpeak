import { configureStore } from '@reduxjs/toolkit'
import counterReduser from './counterSlice'

import { postsApi } from '../API/postsAPI'
import { usersApi } from '../API/usersAPI'
import { pageApi } from '../API/pageAPI'

export const store = configureStore({
  reducer: {
    counter: counterReduser,
    [pageApi.reducerPath]:pageApi.reducer,
    [postsApi.reducerPath]:postsApi.reducer,
    [usersApi.reducerPath]:usersApi.reducer,
  },

  
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat
  ([
    pageApi.middleware,
    postsApi.middleware,
    usersApi.middleware,
    
  ]),

  
})