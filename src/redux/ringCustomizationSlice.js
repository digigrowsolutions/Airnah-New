import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	step: 1,
	showDiamond: false,
	showRing: false,
	productDetails: [
		{
			diamond: {
				product_id: null,
				diamond_price: null,
			},
			ring: {
				product_id: null,
				ring_price: null,
			},
			total_cost: null,
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
		resetCustomization: () => initialState,
		resetDiamond: (state) => {
			state.productDetails[0].diamond = {
				...initialState.productDetails[0].diamond,
			}
			state.productDetails[0].total_cost = null
		},
		resetRing: (state) => {
			state.productDetails[0].ring = { ...initialState.productDetails[0].ring }
			state.productDetails[0].total_cost = null
		},
		setCustomization: (state, action) => {
			state.productDetails[0] = action.payload
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
	resetCustomization,
	setCustomization,
	resetDiamond,
	resetRing,
} = ringCustomizationSlice.actions
export default ringCustomizationSlice.reducer
