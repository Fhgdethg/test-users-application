import { IUser } from '../../type/users'
import { INewName } from '../../type/usersSliceT'

export function newNameHandler(usersArr: IUser[], names: INewName) {
	const users = usersArr
	users.forEach((user: IUser, index: number) => {
		if (user.name === names.nowName) {
			users.splice(index, 1, {
				...user,
				name: names.newName,
			})
			return users
		}
	})
	return users
}
