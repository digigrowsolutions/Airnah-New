import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	step: 1,
	showProduct: false,
	productDetails: [
		{
			diamond: {
				product_id: null,
				total_cost_INR: null,
				total_cost_USD: null,
				total_cost_GBP: null,
			},
		},
	],
}

const ringCustomizationSlice = createSlice({
	name: 'ringCustomization',
	initialState,
	reducers: {
		setStep: (state, action) => {
			state.step = action.payload
		},
		updateDiamondDetails: (state, action) => {
			Object.assign(state.productDetails[0].diamond, action.payload)
		},
		setShowProduct: (state, action) => {
			state.showProduct = action.payload
		},
	},
})

export const { setStep, updateDiamondDetails, setShowProduct } =
	ringCustomizationSlice.actions
export default ringCustomizationSlice.reducer
