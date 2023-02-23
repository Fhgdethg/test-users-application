import { useSaveButton } from '../../hooks/useSaveButton'
import s from './SaveBtn.module.scss'

const SaveBtn = () => {
	const { saver, saveStatus } = useSaveButton()

	return (
		<button className={s.save} onClick={saver}>
			{saveStatus ? 'Data has been saved' : 'Save'}
		</button>
	)
}

export default SaveBtn
