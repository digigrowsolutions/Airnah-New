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
	diamond_price_INR: '',
	diamond_price_GBP: '',
	diamond_price_USD: '',
	head_style: '',
	head_style_price_INR: '',
	head_style_price_GBP: '',
	head_style_price_USD: '',
	head_metal: '',
	head_metal_price_INR: '',
	head_metal_price_GBP: '',
	head_metal_price_USD: '',
	shank_style: '',
	shank_style_price_INR: '',
	shank_style_price_GBP: '',
	shank_style_price_USD: '',
	shank_metal: '',
	shank_metal_price_INR: '',
	shank_metal_price_GBP: '',
	shank_metal_price_USD: '',
	total_cost_INR: '',
	total_cost_GBP: '',
	total_cost_USD: '',
}
