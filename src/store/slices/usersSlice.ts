import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../type/users'
import { INewName, UsersState } from '../../type/usersSliceT'
import { sortingArr } from '../reducers/sortingArr'
import { saveStorage } from '../reducers/saveStorage'
import { executeHandler } from '../reducers/executeHandler'
import { newNameHandler } from '../reducers/newNameHandler'

const initialState = {
	moreStaticUsers: [],
	users: [],
	filterStr: '',
	deleteIds: [],
} as UsersState

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		initialUsersArr(state, action: PayloadAction<IUser[]>) {
			const usersStorageInitial = localStorage.getItem('users')
			if (usersStorageInitial) {
				state.moreStaticUsers = JSON.parse(usersStorageInitial)
				state.users = JSON.parse(usersStorageInitial)
				return
			} else {
				const users = action.payload.map((user: IUser) => ({
					...user,
					execute: false,
				}))
				state.moreStaticUsers = users
				state.users = users
				saveStorage(users)
			}
		},
		searchingUser(state, action: PayloadAction<string>) {
			state.filterStr = action.payload
			state.users = sortingArr(
				state.moreStaticUsers.filter((user: IUser) =>
					user.name
						.toLocaleLowerCase()
						.includes(action.payload.toLocaleLowerCase())
				)
			)
		},
		saveUsers(state, action: PayloadAction<IUser[]>) {
			saveStorage(action.payload)
		},
		addIdToDelete(state, action: PayloadAction<number>) {
			state.deleteIds = [...state.deleteIds, action.payload]
		},
		removeIdToDelete(state, action: PayloadAction<number>) {
			state.deleteIds.forEach((deleteId: number, index: number) => {
				if (deleteId === action.payload) {
					state.deleteIds.splice(index, 1)
				}
			})
		},
		removeItems(state) {
			state.deleteIds.forEach((deleteId: number) =>
				state.users.forEach((user: IUser, index: number) => {
					if (deleteId === user.id) state.users.splice(index, 1)
				})
			)
			state.moreStaticUsers = state.users
		},
		chengerExecutive(state, action: PayloadAction<string>) {
			state.moreStaticUsers = executeHandler(
				state.moreStaticUsers,
				action.payload
			)
			state.users = executeHandler(state.users, action.payload)
		},
		setNewName(state, action: PayloadAction<INewName>) {
			state.moreStaticUsers = newNameHandler(
				state.moreStaticUsers,
				action.payload
			)
			state.users = newNameHandler(state.users, action.payload)
		},
	},
})

export const {
	initialUsersArr,
	searchingUser,
	saveUsers,
	addIdToDelete,
	removeIdToDelete,
	removeItems,
	chengerExecutive,
	setNewName,
} = usersSlice.actions

export default usersSlice.reducer
