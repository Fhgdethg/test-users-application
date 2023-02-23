import React from 'react'
import { IUser } from '../../type/users'
import s from './UserInfoPopup.module.scss'

interface IUserInfoPopup {
	setPopupStatus: () => void
	user: IUser
}

const UserInfoPopup: React.FC<IUserInfoPopup> = ({ setPopupStatus, user }) => {
	return (
		<div className={s.popupFone} onClick={setPopupStatus}>
			<div className={s.popup} onClick={e => e.stopPropagation()}>
				<div className={s.btnWrapper}>
					<button onClick={setPopupStatus}>Close</button>
				</div>
				<h2 className={s.title}>More Info</h2>
				<p className={s.info}>Name: {user.name}</p>
				<p className={s.info}>Email: {user.email}</p>
				<p className={s.info}>Phone: {user.phone}</p>
				<p className={s.info}>Live in {user.address.city}</p>
				<p className={s.info}>Works in {user.company.name}</p>
			</div>
		</div>
	)
}

export default UserInfoPopup
