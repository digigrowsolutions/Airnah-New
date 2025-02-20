import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	step: 1,
	showDiamond: false,
	showRing: false,
	productDetails: [
		{
			diamond: {
				product_id: null,
				diamond_price_INR: null,
				diamond_price_GBP: null,
				diamond_price_USD: null,
			},
			ring: {
				product_id: null,
				ring_price_INR: null,
				ring_price_GBP: null,
				ring_price_USD: null,
			},
			total_cost_INR: null,
			total_cost_GBP: null,
			total_cost_USD: null,
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
		setShowDiamond: (state, action) => {
			state.showDiamond = action.payload
		},
		updateRingDetails: (state, action) => {
			Object.assign(state.productDetails[0].ring, action.payload)
		},
		setShowRing: (state, action) => {
			state.showRing = action.payload
		},
		updateTotalCost: (state, action) => {
			Object.assign(state.productDetails[0], action.payload)
		},
	},
})

export const {
	setStep,
	updateDiamondDetails,
	setShowDiamond,
	updateRingDetails,
	setShowRing,
	updateTotalCost,
} = ringCustomizationSlice.actions
export default ringCustomizationSlice.reducer
