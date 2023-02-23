import SaveBtn from '../../components/SaveBtn/SaveBtn'
import Search from '../../components/Search/Search'
import { User } from '../../components/User/User'
import UsersMenu from '../../components/UserMenu/UsersMenu'
import { useUserPage } from '../../hooks/useUserPage'
import { IUser } from '../../type/users'
import s from './UserPage.module.scss'

const UserPage = () => {
	const { users, filterStr } = useUserPage()

	return (
		<div className={`container ${s.userPage}`}>
			<header className="">
				<h1>Permissions</h1>
				<p>Create and customize rules for your interface</p>
			</header>
			<main>
				<section className={s.usersSection}>
					<div className={s.usersCount}>
						<p>
							Users
							<span>{users.length}</span>
						</p>
						<Search />
					</div>
					<UsersMenu />
					<div className={s.usersWrapper}>
						{users.length ? (
							users.map((user: IUser) => <User key={user.id} {...user} />)
						) : (
							<p>
								{filterStr.length !== 0
									? 'No results found for your search'
									: 'Loading...'}
							</p>
						)}
					</div>
					<SaveBtn />
				</section>
			</main>
		</div>
	)
}

export default UserPage
