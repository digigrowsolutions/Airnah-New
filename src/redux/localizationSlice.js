import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	country: 'INR',
	currency: '₹',
}

const localizationSlice = createSlice({
	name: 'localization',
	initialState,
	reducers: {
		setCountry: (state, action) => {
			const country = action.payload
			state.country = country
			switch (country) {
				case 'USD':
					state.currency = '$'
					break
				case 'GBP':
					state.currency = '€'
					break
				default:
					state.currency = '₹'
			}
		},
	},
})

export const { setCountry } = localizationSlice.actions
export default localizationSlice.reducer
