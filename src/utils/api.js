import axios from 'axios'
const REACT_APP_API_URL = process.env.REACT_APP_API_URL
console.log(REACT_APP_API_URL)

export const fetchFavorites = async (userId) => {
	try {
		const response = await axios.get(
			`${REACT_APP_API_URL}/users/getFavorites/${userId}`
		)
		return response.data
	} catch (error) {
		console.error('Error fetching favorites:', error)
		return []
	}
}

export const fetchCartItems = async (userId) => {
	try {
		const response = await axios.get(
			`${REACT_APP_API_URL}/users/getCart/${userId}`
		)
		return response.data
	} catch (error) {
		console.error('Error fetching cart items:', error)
		return []
	}
}

export const addToFavoritesAPI = async (userId, productId) => {
	try {
		const response = await axios.post(`${REACT_APP_API_URL}/favorites`, {
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
		await axios.delete(`${REACT_APP_API_URL}/favorites/${userId}/${productId}`)
	} catch (error) {
		console.error('Error removing from favorites:', error)
		throw error
	}
}

export const addToCartAPI = async (userId, productId, quantity) => {
	try {
		const response = await axios.post(`${REACT_APP_API_URL}/cart`, {
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
		await axios.delete(`${REACT_APP_API_URL}/cart/${userId}/${productId}`)
	} catch (error) {
		console.error('Error removing from cart:', error)
		throw error
	}
}
