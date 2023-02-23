import { useState } from 'react'
import { saveUsers } from '../store/slices/usersSlice'
import { useAppDispatch, useAppSelector } from './useReduxBase'

export const useSaveButton = () => {
	const dispatch = useAppDispatch()
	const users = useAppSelector(state => state.usersSlice.moreStaticUsers)
	const [saveStatus, setSaveStatus] = useState(false)

	const saver = () => {
		let oldSaveData = localStorage.getItem('users')
		if (oldSaveData !== JSON.stringify(users)) {
			dispatch(saveUsers(users))
			setSaveStatus(!saveStatus)
			setTimeout(() => setSaveStatus(false), 1000)
		}
	}

	return { saver, saveStatus }
}
