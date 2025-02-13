import { useState, useEffect } from 'react'
import { addProduct, updateProduct } from '../utils/api'
import { convertFormData } from '../utils/helpers'

const AddProduct = ({ initialData = null, onSuccess }) => {
	const [formData, setFormData] = useState({
		name: '',
		category: 'ring',
		description: '',
		image_URL: '',
		status: 'active',
		gold_quantity: '',
		gold_price: '',
		gold_total: '',
		round_quantity: '',
		round_price: '',
		round_total: '',
		oval_quantity: '',
		oval_price: '',
		oval_total: '',
		marquise_quantity: '',
		marquise_price: '',
		marquise_total: '',
		emerald_quantity: '',
		emerald_price: '',
		emerald_total: '',
		princess_quantity: '',
		princess_price: '',
		princess_total: '',
		pear_quantity: '',
		pear_price: '',
		pear_total: '',
		heart_quantity: '',
		heart_price: '',
		heart_total: '',
		other_diamond_quantity: '',
		other_diamond_price: '',
		other_diamond_total: '',
		gemstone_quantity: '',
		gemstone_price: '',
		gemstone_total: '',
		misc_cost: '',
		labour_cost: '',
		other_cost: '',
		total_cost: '',
	})

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
			}
			setFormData({
				name: '',
				category: 'ring',
				description: '',
				image_URL: '',
				status: 'active',
				gold_quantity: '',
				gold_price: '',
				gold_total: '',
				round_quantity: '',
				round_price: '',
				round_total: '',
				oval_quantity: '',
				oval_price: '',
				oval_total: '',
				marquise_quantity: '',
				marquise_price: '',
				marquise_total: '',
				emerald_quantity: '',
				emerald_price: '',
				emerald_total: '',
				princess_quantity: '',
				princess_price: '',
				princess_total: '',
				pear_quantity: '',
				pear_price: '',
				pear_total: '',
				heart_quantity: '',
				heart_price: '',
				heart_total: '',
				other_diamond_quantity: '',
				other_diamond_price: '',
				other_diamond_total: '',
				gemstone_quantity: '',
				gemstone_price: '',
				gemstone_total: '',
				misc_cost: '',
				labour_cost: '',
				other_cost: '',
				total_cost: '',
			})
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
						required
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
					<label className="block font-medium">Gold Quantity</label>
					<input
						type="number"
						name="gold_quantity"
						value={formData.gold_quantity}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Gold Price</label>
					<input
						type="number"
						name="gold_price"
						value={formData.gold_price}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Gold Total</label>
					<input
						type="number"
						name="gold_total"
						value={formData.gold_total}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div></div>
				<div>
					<label className="block font-medium">Round Quantity</label>
					<input
						type="number"
						name="round_quantity"
						value={formData.round_quantity}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Round Price</label>
					<input
						type="number"
						name="round_price"
						value={formData.round_price}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Round Total</label>
					<input
						type="number"
						name="round_total"
						value={formData.round_total}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div></div>
				<div>
					<label className="block font-medium">Oval Quantity</label>
					<input
						type="number"
						name="oval_quantity"
						value={formData.oval_quantity}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Oval Price</label>
					<input
						type="number"
						name="oval_price"
						value={formData.oval_price}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Oval Total</label>
					<input
						type="number"
						name="oval_total"
						value={formData.oval_total}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div></div>
				<div>
					<label className="block font-medium">Marquise Quantity</label>
					<input
						type="number"
						name="marquise_quantity"
						value={formData.marquise_quantity}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Marquise Price</label>
					<input
						type="number"
						name="marquise_price"
						value={formData.marquise_price}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Marquise Total</label>
					<input
						type="number"
						name="marquise_total"
						value={formData.marquise_total}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div></div>
				<div>
					<label className="block font-medium">Emerald Quantity</label>
					<input
						type="number"
						name="emerald_quantity"
						value={formData.emerald_quantity}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Emerald Price</label>
					<input
						type="number"
						name="emerald_price"
						value={formData.emerald_price}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Emerald Total</label>
					<input
						type="number"
						name="emerald_total"
						value={formData.emerald_total}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div></div>
				<div>
					<label className="block font-medium">Princess Quantity</label>
					<input
						type="number"
						name="princess_quantity"
						value={formData.princess_quantity}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Princess Price</label>
					<input
						type="number"
						name="princess_price"
						value={formData.princess_price}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Princess Total</label>
					<input
						type="number"
						name="princess_total"
						value={formData.princess_total}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div></div>
				<div>
					<label className="block font-medium">Pear Quantity</label>
					<input
						type="number"
						name="pear_quantity"
						value={formData.pear_quantity}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Pear Price</label>
					<input
						type="number"
						name="pear_price"
						value={formData.pear_price}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Pear Total</label>
					<input
						type="number"
						name="pear_total"
						value={formData.pear_total}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div></div>
				<div>
					<label className="block font-medium">Heart Quantity</label>
					<input
						type="number"
						name="heart_quantity"
						value={formData.heart_quantity}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Heart Price</label>
					<input
						type="number"
						name="heart_price"
						value={formData.heart_price}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Heart Total</label>
					<input
						type="number"
						name="heart_total"
						value={formData.heart_total}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div></div>
				<div>
					<label className="block font-medium">Other Diamond Quantity</label>
					<input
						type="number"
						name="other_diamond_quantity"
						value={formData.other_diamond_quantity}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Other Diamond Price</label>
					<input
						type="number"
						name="other_diamond_price"
						value={formData.other_diamond_price}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Other Diamond Total</label>
					<input
						type="number"
						name="other_diamond_total"
						value={formData.other_diamond_total}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div></div>
				<div>
					<label className="block font-medium">Gemstone Quantity</label>
					<input
						type="number"
						name="gemstone_quantity"
						value={formData.gemstone_quantity}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Gemstone Price</label>
					<input
						type="number"
						name="gemstone_price"
						value={formData.gemstone_price}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div>
					<label className="block font-medium">Gemstone Total</label>
					<input
						type="number"
						name="gemstone_total"
						value={formData.gemstone_total}
						onChange={handleChange}
						className="border p-2 rounded w-full"
					/>
				</div>
				<div></div>
				<div>
					<label className="block font-medium">Misc Cost</label>
					<input
						type="number"
						name="misc_cost"
						value={formData.misc_cost}
						onChange={handleChange}
						className="border p-2 rounded w-full"
						required
					/>
				</div>
				<div>
					<label className="block font-medium">Labour Cost</label>
					<input
						type="number"
						name="labour_cost"
						value={formData.labour_cost}
						onChange={handleChange}
						className="border p-2 rounded w-full"
						required
					/>
				</div>
				<div>
					<label className="block font-medium">Other Cost</label>
					<input
						type="number"
						name="other_cost"
						value={formData.other_cost}
						onChange={handleChange}
						className="border p-2 rounded w-full"
						required
					/>
				</div>
				<div>
					<label className="block font-medium">Total Cost</label>
					<input
						type="number"
						name="total_cost"
						value={formData.total_cost}
						onChange={handleChange}
						className="border p-2 rounded w-full"
						required
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
