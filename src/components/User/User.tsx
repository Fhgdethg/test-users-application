import { ChangeEvent } from 'react'
import dots from '../../assets/icons/dots.png'
import { useUserSettings } from '../../hooks/useUserSettings'
import { IUser } from '../../type/users'
import ModifyPopup from '../ModifyPopup/ModifyPopup'
import UserInfoPopup from '../UserInfoPopup/UserInfoPopup'
import s from './User.module.scss'

export const User: React.FC<IUser> = props => {
	const {
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
	} = useUserSettings(props)

	return (
		<>
			<div className={s.userWrapper}>
				<div className={s.userName}>
					<div className={s.photo}></div>
					<p className={executeStatus ? s.execute : ''}>{props.name}</p>
					<p className="text-[9px] !important">{seeStatus && '(seen)'}</p>
				</div>
				<div className={s.userOptionHandler}>
					<label className={s.checkItemLable}>
						<input
							type="checkbox"
							className={s.checkItem}
							checked={seeStatus}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setSeeStatus(!seeStatus)
							}
						/>
						<span></span>
					</label>
				</div>
				<div className={s.userOptionHandler}>
					<label className={s.checkItemLable}>
						<input
							type="checkbox"
							className={s.checkItem}
							checked={executeStatus}
							onChange={executer}
						/>
						<span></span>
					</label>
				</div>
				<div className={s.userOptionHandler}>
					<label className={s.checkItemLable}>
						<input
							type="checkbox"
							className={s.checkItem}
							checked={modifyShow}
							onChange={() => setModifyShowStatus(!modifyShow)}
						/>
						<span></span>
					</label>
				</div>
				<div className={s.userOptionHandler}>
					<label className={s.checkItemLable}>
						<input
							type="checkbox"
							className={s.checkItem}
							checked={deleteStatus}
							onChange={deleter}
						/>
						<span></span>
					</label>
				</div>
				<div
					className={s.userOptionHandler}
					onClick={() => setPopupStatus(!popupStatus)}>
					<img src={dots} alt="..." />
				</div>
				{popupStatus && (
					<UserInfoPopup
						setPopupStatus={() => setPopupStatus(!popupStatus)}
						user={props}
					/>
				)}
			</div>
			{modifyShow ? (
				<ModifyPopup
					setModifyShowStatus={() => setModifyShowStatus(!modifyShow)}
					nowName={props.name}
				/>
			) : (
				''
			)}
		</>
	)
}
