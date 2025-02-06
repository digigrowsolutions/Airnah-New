import { configureStore } from '@reduxjs/toolkit'
import authReducer from './redux/authSlice'
import localizationReducer from './redux/localizationSlice'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		localization: localizationReducer,
	},
})

export default store
