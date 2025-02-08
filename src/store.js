import { configureStore } from '@reduxjs/toolkit'
import authReducer from './redux/authSlice'
import localizationReducer from './redux/localizationSlice'
import ringCustomizationReducer from './redux/ringCustomizationSlice'
import favoritesCartReducer from './redux/favoritesCartSlice'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		localization: localizationReducer,
		ringCustomization: ringCustomizationReducer,
		favoritesCart: favoritesCartReducer,
	},
})

export default store
