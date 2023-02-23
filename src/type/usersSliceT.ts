import { IUser } from './users'

export interface UsersState {
	moreStaticUsers: IUser[] | []
	users: IUser[] | []
	filterStr: string
	deleteIds: number[] | []
	executeIds: number[]
}

export interface INewName {
	nowName: string
	newName: string
}
