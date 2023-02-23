import { IUser } from '../../type/users'

export function executeHandler(usersArr: IUser[], name: string) {
	const users = usersArr
	users.forEach((user: IUser, index: number) => {
		if (user.name === name) {
			users.splice(index, 1, {
				...user,
				execute: !user.execute,
			})
			return users
		}
	})
	return users
}
