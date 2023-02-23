import { IUser } from '../../type/users'

export function sortingArr(arr: IUser[]) {
	arr.sort((nowUser: IUser, nextUser: IUser) => {
		const nameNow = nowUser.name.toLowerCase()
		const nameNext = nextUser.name.toLowerCase()
		if (nameNow < nameNext) return -1
		if (nameNow > nameNext) return 1
		return 0
	})
	return arr
}
