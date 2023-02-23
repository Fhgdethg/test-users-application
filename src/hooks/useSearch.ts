import { FormEvent, useEffect, useRef, useState } from 'react'
import { searchingUser } from '../store/slices/usersSlice'
import { useAppDispatch, useAppSelector } from './useReduxBase'

export const useSearch = () => {
	const dispatch = useAppDispatch()
	const users = useAppSelector(state => state.usersSlice.users)
	const [searchVal, setSearchVal] = useState('')

	const searchRef = useRef<HTMLInputElement>(null!)

	useEffect(() => searchRef.current.focus(), [])

	const searchUser = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(searchingUser(searchVal))
	}

	return { searchUser, searchVal, setSearchVal, searchRef }
}
