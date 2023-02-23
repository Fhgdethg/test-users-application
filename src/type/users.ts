export interface IGeogr {
	lat: string
	lng: string
}

export interface IAddress {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: IGeogr
}

export interface ICompany {
	name: string
	catchPhrase: string
	bs: string
}

export interface IUser {
	id: number
	name: string
	username: string
	email: string
	address: IAddress
	phone: string
	website: string
	company: ICompany
	execute: boolean
}
