import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllProducts, getAllUsers } from '../utils/api'

export const fetchUsers = createAsyncThunk(
	'users/fetchUsers',
	async (_, { rejectWithValue }) => {
		try {
			const response = await getAllUsers()
			return response.data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async (_, { rejectWithValue }) => {
		try {
			const response = await getAllProducts()
			return response.data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

const userProductsSlice = createSlice({
	name: 'userProducts',
	initialState: {
		users: [],
		products: [],
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			// Fetch Users
			.addCase(fetchUsers.pending, (state) => {
				state.loading = true
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.loading = false
				state.users = action.payload
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})

			// Fetch Products
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.loading = false
				state.products = action.payload
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
	},
})

export default userProductsSlice.reducer
