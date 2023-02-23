import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../../type/users'

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/users',
	}),
	endpoints: builder => ({
		getUsers: builder.query<IUser[], void>({
			query: () => ``,
		}),
	}),
})

export const { useGetUsersQuery } = usersApi
