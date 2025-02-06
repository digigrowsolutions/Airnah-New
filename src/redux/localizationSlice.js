import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	country: 'US', // Default country
	language: 'en', // Default language
	currency: 'USD', // Default currency
}

const localizationSlice = createSlice({
	name: 'localization',
	initialState,
	reducers: {
		setCountry: (state, action) => {
			const country = action.payload
			state.country = country

			// Map country to language and currency
			switch (country) {
				case 'FR':
					state.language = 'fr'
					state.currency = 'EUR'
					break
				case 'DE':
					state.language = 'de'
					state.currency = 'EUR'
					break
				default:
					state.language = 'en'
					state.currency = 'USD'
			}
		},
	},
})

export const { setCountry } = localizationSlice.actions

export default localizationSlice.reducer
