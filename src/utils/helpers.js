export const convertFormData = (data) => {
	const updatedData = { ...data }

	Object.keys(updatedData).forEach((key) => {
		if (
			key.includes('quantity') ||
			key.includes('price') ||
			key.includes('total') ||
			key.includes('cost') ||
			key.includes('carat')
		) {
			updatedData[key] =
				updatedData[key] === '' || updatedData[key] === null
					? null
					: parseFloat(updatedData[key])
		}
	})

	return updatedData
}

export const formatDate = (date) => {
	const newDate = new Date(date)
	const formattedDate = newDate.toLocaleDateString('en-GB')
	return formattedDate
}

export const productJson = {
	name: '',
	category: 'ring',
	description: '',
	image_URL: '',
	status: 'active',
	source: 'natural',
	shape: '',
	cut: '',
	color: '',
	clarity: '',
	carat: '',
	diamond_price: '',
	head_style: '',
	head_style_price: '',
	head_metal: '',
	head_metal_price: '',
	shank_style: '',
	shank_style_price: '',
	shank_metal: '',
	shank_metal_price: '',
	total_cost: '',
}

export const convertPrice = (price, country, INR_rate, GBP_rate) => {
	switch (country) {
		case 'INR':
			return price * INR_rate
		case 'GBP':
			return price * GBP_rate
		case 'USD':
			return price
		default:
			return price
	}
}
