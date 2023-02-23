import { ChangeEvent, useState } from 'react'
import {
	addIdToDelete,
	chengerExecutive,
	removeIdToDelete,
} from '../store/slices/usersSlice'
import { IUser } from '../type/users'
import { useAppDispatch } from './useReduxBase'

export const useUserSettings = (props: IUser) => {
	const dispatch = useAppDispatch()
	const [seeStatus, setSeeStatus] = useState(false)
	const [executeStatus, setExecuteStatus] = useState(props.execute)
	const [modifyShow, setModifyShowStatus] = useState(false)
	const [deleteStatus, setDeleteStatus] = useState(false)
	const [popupStatus, setPopupStatus] = useState(false)

	function deleter(e: ChangeEvent<HTMLInputElement>) {
		if (deleteStatus) {
			dispatch(removeIdToDelete(props.id))
		} else dispatch(addIdToDelete(props.id))
		setDeleteStatus(e.target.checked)
	}

	function executer() {
		setExecuteStatus(!executeStatus)
		dispatch(chengerExecutive(props.name))
	}

	return {
		executeStatus,
		seeStatus,
		setSeeStatus,
		executer,
		modifyShow,
		setModifyShowStatus,
		deleteStatus,
		deleter,
		setPopupStatus,
		popupStatus,
	}
}
