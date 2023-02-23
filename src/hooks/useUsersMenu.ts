import { removeItems } from '../store/slices/usersSlice'
import { useAppDispatch, useAppSelector } from './useReduxBase'

export const useUsersMenu = () => {
	const dispatch = useAppDispatch()
	const deleteIds = useAppSelector(state => state.usersSlice.deleteIds)

	function deleter() {
		if (deleteIds) dispatch(removeItems())
	}

	return { deleter }
}
