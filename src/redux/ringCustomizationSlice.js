import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	step: 1,
	metal: 'gold',
	stone: 'diamond',
	size: '6',
}

const ringCustomizationSlice = createSlice({
	name: 'ringCustomization',
	initialState,
	reducers: {
		setStep: (state, action) => {
			state.step = action.payload
		},
		updateCustomization: (state, action) => {
			state[action.payload.key] = action.payload.value
		},
	},
})

export const { setStep, updateCustomization } = ringCustomizationSlice.actions
export default ringCustomizationSlice.reducer
