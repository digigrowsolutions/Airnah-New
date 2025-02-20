import { useState, useEffect } from 'react'
import { addProduct, updateProduct } from '../../utils/api'
import { convertFormData, productJson } from '../../utils/helpers'
import { useDispatch } from 'react-redux'
import { fetchProducts, fetchUsers } from '../../redux/userProductsSlice'

const AddProduct = ({ initialData = null, onSuccess }) => {
	const dispatch = useDispatch()
	const [formData, setFormData] = useState(productJson)

	// Pre-fill the form if initialData is provided
	useEffect(() => {
		if (initialData) {
			setFormData(initialData)
		}
	}, [initialData])

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const cleanedData = convertFormData(formData)

		try {
			if (initialData) {
				// Update existing product
				await updateProduct(initialData.product_id, cleanedData)
				alert('Product updated successfully!')
			} else {
				// Add new product
				await addProduct(cleanedData)
				alert('Product added successfully!')
				dispatch(fetchProducts())
				dispatch(fetchUsers())
			}
			setFormData(productJson)
			onSuccess?.() // Call callback function to refresh list
		} catch (error) {
			console.error('Error:', error)
		}
	}

	return (
		<div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
			<h2 className="text-2xl font-bold mb-4">
				{initialData ? 'Update Product' : 'Add Product'}
			</h2>
			<form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
				<div>
					<label className="block font-medium">Product Name</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Category</label>
					<select
						name="category"
						value={formData.category}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					>
						<option value="ring">Ring</option>
						<option value="necklace">Necklace</option>
						<option value="pendant">Pendant</option>
						<option value="diamond">Diamond</option>
					</select>
				</div>
				<div>
					<label className="block font-medium">Status</label>
					<select
						name="status"
						value={formData.status}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					>
						<option value="active">Active</option>
						<option value="inactive">Inactive</option>
					</select>
				</div>
				<div>
					<label className="block font-medium">Source</label>
					<select
						name="source"
						value={formData.source}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					>
						<option value="natural">Natural</option>
						<option value="labgrown">Lab-Grown</option>
					</select>
				</div>
				<div>
					<label className="block font-medium">Image URL</label>
					<input
						type="text"
						name="image_URL"
						value={formData.image_URL}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div className="col-span-2">
					<label className="block font-medium">Description</label>
					<textarea
						name="description"
						value={formData.description}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Shape</label>
					<input
						type="text"
						name="shape"
						value={formData.shape}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Cut</label>
					<input
						type="text"
						name="cut"
						value={formData.cut}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Color</label>
					<input
						type="text"
						name="color"
						value={formData.color}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Clarity</label>
					<input
						type="text"
						name="clarity"
						value={formData.clarity}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Carat</label>
					<input
						type="number"
						name="carat"
						value={formData.carat}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Diamond Price INR</label>
					<input
						type="number"
						name="diamond_price_INR"
						value={formData.diamond_price_INR}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Diamond Price GBP</label>
					<input
						type="number"
						name="diamond_price_GBP"
						value={formData.diamond_price_GBP}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Diamond Price USD</label>
					<input
						type="number"
						name="diamond_price_USD"
						value={formData.diamond_price_USD}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Head Style</label>
					<input
						type="text"
						name="head_style"
						value={formData.head_style}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Head Style Price INR</label>
					<input
						type="number"
						name="head_style_price_INR"
						value={formData.head_style_price_INR}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Head Style Price GBP</label>
					<input
						type="number"
						name="head_style_price_GBP"
						value={formData.head_style_price_GBP}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Head Style Price USD</label>
					<input
						type="number"
						name="head_style_price_USD"
						value={formData.head_style_price_USD}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Head Metal</label>
					<input
						type="text"
						name="head_metal"
						value={formData.head_metal}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Head Metal Price INR</label>
					<input
						type="number"
						name="head_metal_price_INR"
						value={formData.head_metal_price_INR}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Head Metal Price GBP</label>
					<input
						type="number"
						name="head_metal_price_GBP"
						value={formData.head_metal_price_GBP}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Head Metal Price USD</label>
					<input
						type="number"
						name="head_metal_price_USD"
						value={formData.head_metal_price_USD}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Shank Style</label>
					<input
						type="text"
						name="shank_style"
						value={formData.shank_style}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Shank Style Price INR</label>
					<input
						type="number"
						name="shank_style_price_INR"
						value={formData.shank_style_price_INR}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Shank Style Price GBP</label>
					<input
						type="number"
						name="shank_style_price_GBP"
						value={formData.shank_style_price_GBP}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Shank Style Price USD</label>
					<input
						type="number"
						name="shank_style_price_USD"
						value={formData.shank_style_price_USD}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Shank Metal</label>
					<input
						type="text"
						name="shank_metal"
						value={formData.shank_metal}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Shank Metal Price INR</label>
					<input
						type="number"
						name="shank_metal_price_INR"
						value={formData.shank_metal_price_INR}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Shank Metal Price GBP</label>
					<input
						type="number"
						name="shank_metal_price_GBP"
						value={formData.shank_metal_price_GBP}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Shank Metal Price USD</label>
					<input
						type="number"
						name="shank_metal_price_USD"
						value={formData.shank_metal_price_USD}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Total Cost INR</label>
					<input
						type="number"
						name="total_cost_INR"
						value={formData.total_cost_INR}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Total Cost USD</label>
					<input
						type="number"
						name="total_cost_USD"
						value={formData.total_cost_USD}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Total Cost GBP</label>
					<input
						type="number"
						name="total_cost_GBP"
						value={formData.total_cost_GBP}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-500 text-white p-2 rounded col-span-2"
				>
					{initialData ? 'Update Product' : 'Add Product'}
				</button>
			</form>
		</div>
	)
}

export default AddProduct
