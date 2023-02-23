import search from '../../assets/icons/search.png'
import { useSearch } from '../../hooks/useSearch'
import s from './Search.module.scss'

const Search = () => {
	const { searchUser, searchVal, setSearchVal, searchRef } = useSearch()

	return (
		<form className={s.search} onSubmit={searchUser}>
			<button type="submit">
				<img src={search} alt="Search" />
			</button>
			<input
				type="text"
				value={searchVal}
				onChange={e => setSearchVal(e.target.value)}
				ref={searchRef}
				placeholder="Search"
			/>
		</form>
	)
}

export default Search
