import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

export const fetchFavorites = async (userId) => {
	try {
		const response = await axios.get(`${API_URL}/favorites/${userId}`)
		return response.data
	} catch (error) {
		console.error('Error fetching favorites:', error)
		return []
	}
}

export const fetchCartItems = async (userId) => {
	try {
		const response = await axios.get(`${API_URL}/cart/${userId}`)
		return response.data
	} catch (error) {
		console.error('Error fetching cart items:', error)
		return []
	}
}

export const addToFavoritesAPI = async (userId, productId) => {
	try {
		const response = await axios.post(`${API_URL}/favorites`, {
			user_id: userId,
			product_id: productId,
		})
		return response.data
	} catch (error) {
		console.error('Error adding to favorites:', error)
		throw error
	}
}

export const removeFromFavoritesAPI = async (userId, productId) => {
	try {
		await axios.delete(`${API_URL}/favorites/${userId}/${productId}`)
	} catch (error) {
		console.error('Error removing from favorites:', error)
		throw error
	}
}

export const addToCartAPI = async (userId, productId, quantity) => {
	try {
		const response = await axios.post(`${API_URL}/cart`, {
			user_id: userId,
			product_id: productId,
			quantity,
		})
		return response.data
	} catch (error) {
		console.error('Error adding to cart:', error)
		throw error
	}
}

export const removeFromCartAPI = async (userId, productId) => {
	try {
		await axios.delete(`${API_URL}/cart/${userId}/${productId}`)
	} catch (error) {
		console.error('Error removing from cart:', error)
		throw error
	}
}
