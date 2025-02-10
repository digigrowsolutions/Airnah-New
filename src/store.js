import { configureStore } from '@reduxjs/toolkit'
import localizationReducer from './redux/localizationSlice'
import ringCustomizationReducer from './redux/ringCustomizationSlice'
import favoritesCartReducer from './redux/favoritesCartSlice'

export const store = configureStore({
	reducer: {
		localization: localizationReducer,
		ringCustomization: ringCustomizationReducer,
		favoritesCart: favoritesCartReducer,
	},
})

export default store
