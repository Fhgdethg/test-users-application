import React from 'react'
import { useModifyName } from '../../hooks/useModifyName'
import { IModifyPopup } from '../../type/modifyPopup'
import s from './ModifyPopup.module.scss'

const ModifyPopup: React.FC<IModifyPopup> = ({
	setModifyShowStatus,
	nowName,
}) => {
	const { name, setName, newNameRef, setterNewName } = useModifyName({
		setModifyShowStatus,
		nowName,
	})

	return (
		<div className={s.popupFone} onClick={setModifyShowStatus}>
			<div className={s.popup} onClick={e => e.stopPropagation()}>
				<div className={s.btnWrapper}>
					<button onClick={setModifyShowStatus}>Close</button>
				</div>
				<h2 className={s.title}>Set new name</h2>
				<form className={s.search} onSubmit={setterNewName}>
					<button type="submit">Set</button>
					<input
						type="text"
						value={name}
						onChange={e => setName(e.target.value)}
						ref={newNameRef}
						placeholder="Enter new name"
						required
					/>
				</form>
			</div>
		</div>
	)
}

export default ModifyPopup
