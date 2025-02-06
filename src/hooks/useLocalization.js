import { useSelector } from 'react-redux'

export const useLocalization = () => {
	const { language, currency } = useSelector((state) => state.localization)
	return { language, currency }
}
