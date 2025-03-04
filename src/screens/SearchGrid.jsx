import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { searchResult } from '../utils/api'

const SearchGrid = () => {
	const [products, setProducts] = useState([])
	const location = useLocation() // Corrected variable name for clarity

	// Fetch search results whenever location.state changes
	useEffect(() => {
		if (location.state) {
			const fetchProducts = async () => {
				try {
					const data = await searchResult(location.state)
					setProducts(data.data)
				} catch (error) {
					console.error('Error fetching products:', error)
				}
			}

			fetchProducts()
		}
	}, [location.state]) // Dependency array includes location.state

	return (
		<div>
			<ul>
				{products?.map((product) => (
					<li key={product.id}>
						<h3>
							{product.name} ({product.type})
						</h3>
						<p>{product.description}</p>
						<img src={product.image_URL} alt={product.name} width="100" />
					</li>
				))}
			</ul>
		</div>
	)
}

export default SearchGrid
