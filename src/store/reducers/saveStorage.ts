import { IUser } from '../../type/users'

export const saveStorage = (users: IUser[]) =>
	localStorage.setItem('users', JSON.stringify(users))
