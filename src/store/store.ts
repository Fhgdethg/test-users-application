import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from './api/usersApi'
import usersSlice from './slices/usersSlice'

export const store = configureStore({
	reducer: {
		usersSlice,
		[usersApi.reducerPath]: usersApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(usersApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
