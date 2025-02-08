// src/redux/favoritesCartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
	fetchFavorites,
	fetchCartItems,
	addToFavoritesAPI,
	removeFromFavoritesAPI,
	addToCartAPI,
	removeFromCartAPI,
} from '../utils/api'

// Async thunks
export const fetchUserFavorites = createAsyncThunk(
	'favoritesCart/fetchFavorites',
	async (userId, { rejectWithValue }) => {
		try {
			return await fetchFavorites(userId)
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const fetchUserCartItems = createAsyncThunk(
	'favoritesCart/fetchCartItems',
	async (userId, { rejectWithValue }) => {
		try {
			return await fetchCartItems(userId)
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const addToFavorites = createAsyncThunk(
	'favoritesCart/addToFavorites',
	async ({ userId, productId }, { rejectWithValue }) => {
		try {
			return await addToFavoritesAPI(userId, productId)
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const removeFromFavorites = createAsyncThunk(
	'favoritesCart/removeFromFavorites',
	async ({ userId, productId }, { rejectWithValue }) => {
		try {
			await removeFromFavoritesAPI(userId, productId)
			return productId
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const addToCart = createAsyncThunk(
	'favoritesCart/addToCart',
	async ({ userId, productId, quantity }, { rejectWithValue }) => {
		try {
			return await addToCartAPI(userId, productId, quantity)
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const removeFromCart = createAsyncThunk(
	'favoritesCart/removeFromCart',
	async ({ userId, productId }, { rejectWithValue }) => {
		try {
			await removeFromCartAPI(userId, productId)
			return productId
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

// Slice
const favoritesCartSlice = createSlice({
	name: 'favoritesCart',
	initialState: {
		favorites: [],
		cartItems: [],
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			// Fetch Favorites
			.addCase(fetchUserFavorites.pending, (state) => {
				state.loading = true
			})
			.addCase(fetchUserFavorites.fulfilled, (state, action) => {
				state.loading = false
				state.favorites = action.payload
			})
			.addCase(fetchUserFavorites.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})

			// Fetch Cart Items
			.addCase(fetchUserCartItems.pending, (state) => {
				state.loading = true
			})
			.addCase(fetchUserCartItems.fulfilled, (state, action) => {
				state.loading = false
				state.cartItems = action.payload
			})
			.addCase(fetchUserCartItems.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})

			// Add to Favorites
			.addCase(addToFavorites.fulfilled, (state, action) => {
				state.favorites.push(action.payload)
			})

			// Remove from Favorites
			.addCase(removeFromFavorites.fulfilled, (state, action) => {
				state.favorites = state.favorites.filter(
					(item) => item.product_id !== action.payload
				)
			})

			// Add to Cart
			.addCase(addToCart.fulfilled, (state, action) => {
				state.cartItems.push(action.payload)
			})

			// Remove from Cart
			.addCase(removeFromCart.fulfilled, (state, action) => {
				state.cartItems = state.cartItems.filter(
					(item) => item.product_id !== action.payload
				)
			})
	},
})

export default favoritesCartSlice.reducer
