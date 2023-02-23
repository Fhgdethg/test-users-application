import { FormEvent, useEffect, useRef, useState } from 'react'
import { setNewName } from '../store/slices/usersSlice'
import { IModifyPopup } from '../type/modifyPopup'
import { useAppDispatch } from './useReduxBase'

export const useModifyName = ({
	setModifyShowStatus,
	nowName,
}: IModifyPopup) => {
	const dispatch = useAppDispatch()
	const [name, setName] = useState('')
	const newNameRef = useRef<HTMLInputElement>(null!)

	useEffect(() => newNameRef.current.focus(), [])

	function setterNewName(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		dispatch(
			setNewName({
				nowName,
				newName: name,
			})
		)
		setModifyShowStatus()
	}

	return { name, setName, newNameRef, setterNewName }
}
