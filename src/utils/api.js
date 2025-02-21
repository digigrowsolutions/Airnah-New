import axios from 'axios'
const REACT_APP_API_URL = process.env.REACT_APP_API_URL

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
		const response = await axios.post(`${REACT_APP_API_URL}/users/addToCart`, {
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

export const addProduct = async (data) => {
	try {
		const response = await axios.post(
			`${REACT_APP_API_URL}/admin/addProduct`,
			data
		)
		return response
	} catch (error) {
		console.log('Error adding the product', error)
		throw error
	}
}

export const getAllProducts = async () => {
	try {
		const response = await axios.get(
			`${REACT_APP_API_URL}/admin/getAllProducts`
		)
		return response
	} catch (error) {
		console.log('Error getting all products', error)
		throw error
	}
}

export const getAllProductsByCategory = async (category) => {
	try {
		const response = await axios.get(
			`${REACT_APP_API_URL}/admin/getAllProductsByCategory/${category}`
		)
		return response
	} catch (error) {
		console.log('Error getting all diamonds', error)
		throw error
	}
}

export const updateProduct = async (productId, data) => {
	try {
		const response = await axios.put(
			`${REACT_APP_API_URL}/admin/updateProduct/${productId}`,
			data
		)
		return response
	} catch (error) {
		console.log('Error updating product', error)
		throw error
	}
}

export const getAllUsers = async () => {
	try {
		const response = await axios.get(`${REACT_APP_API_URL}/admin/getAllUsers`)
		return response
	} catch (error) {
		console.log('Error getting all users', error)
		throw error
	}
}

export const getProduct = async (productId) => {
	try {
		const response = await axios.get(
			`${REACT_APP_API_URL}/getProduct/${productId}`
		)
		return response
	} catch (error) {
		console.log('Error getting product details', error)
		throw error
	}
}

export const getMasterList = async () => {
	try {
		const response = await axios.get(`${REACT_APP_API_URL}/admin/getMasterList`)
		return response.data
	} catch (error) {
		console.log('Error getting master list', error)
		throw error
	}
}

export const addMasterEntry = async (data) => {
	try {
		const response = await axios.post(
			`${REACT_APP_API_URL}/admin/addMasterEntry`,
			data
		)
		return response
	} catch (error) {
		console.log('Error adding master entry', error)
		throw error
	}
}
