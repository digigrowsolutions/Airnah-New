import { configureStore } from '@reduxjs/toolkit'
import localizationReducer from './redux/localizationSlice'
import ringCustomizationReducer from './redux/ringCustomizationSlice'
import favoritesCartReducer from './redux/favoritesCartSlice'
import userProductsReducer from './redux/userProductsSlice'

export const store = configureStore({
	reducer: {
		localization: localizationReducer,
		ringCustomization: ringCustomizationReducer,
		favoritesCart: favoritesCartReducer,
		userProducts: userProductsReducer,
	},
})

export default store
