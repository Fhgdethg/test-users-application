import { useEffect } from 'react'
import { useGetUsersQuery } from '../store/api/usersApi'
import { initialUsersArr } from '../store/slices/usersSlice'
import { useAppDispatch, useAppSelector } from './useReduxBase'

export const useUserPage = () => {
	const { data } = useGetUsersQuery()
	const dispatch = useAppDispatch()
	const users = useAppSelector(state => state.usersSlice.users)
	const filterStr = useAppSelector(state => state.usersSlice.filterStr)

	useEffect(() => {
		if (data) {
			dispatch(initialUsersArr(data))
		}
	}, [data])

	return { users, filterStr }
}
