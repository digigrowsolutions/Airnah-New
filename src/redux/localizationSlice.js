import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	country: 'EN', // Default country
	currency: 'USD', // Default currency
}

const localizationSlice = createSlice({
	name: 'localization',
	initialState,
	reducers: {
		setCountry: (state, action) => {
			const country = action.payload
			state.country = country
			switch (country) {
				case 'FR':
					state.currency = 'EUR'
					break
				case 'DE':
					state.currency = 'EUR'
					break
				default:
					state.currency = 'USD'
			}
		},
	},
})

export const { setCountry } = localizationSlice.actions
export default localizationSlice.reducer
