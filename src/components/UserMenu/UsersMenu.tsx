import toBottom from '../../assets/icons/bottom.png'
import { useUsersMenu } from '../../hooks/useUsersMenu'
import s from './UserMenu.module.scss'

const UsersMenu = () => {
	const { deleter } = useUsersMenu()

	return (
		<div className={s.menuWrapper}>
			<div className={s.name}>
				<p>UserName</p>
				<img src={toBottom} alt="to bottom" />
			</div>
			<p className={s.menuEndpoint}>View</p>
			<p className={s.menuEndpoint}>Execute</p>
			<p className={s.menuEndpoint}>Modify</p>
			<p className={s.menuEndpoint} onClick={deleter}>
				Delete
			</p>
		</div>
	)
}

export default UsersMenu
