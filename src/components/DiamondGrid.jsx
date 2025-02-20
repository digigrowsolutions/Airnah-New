import { useEffect, useState } from 'react'
import diamondImage from '../assets/ring2.jpg'
import diamondHoverImage from '../assets/Wedding-rings.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsByCategory } from '../utils/api'
import {
	setShowDiamond,
	updateDiamondDetails,
} from '../redux/ringCustomizationSlice'

function DiamondGrid() {
	const dispatch = useDispatch()
	const { currency, country } = useSelector((state) => state.localization)
	const [diamonds, setDiamonds] = useState([])
	const [hoveredImage, setHoveredImage] = useState(null)
	const [activeTab, setActiveTab] = useState('Natural')
	const [cut, setCut] = useState(50)
	const [color, setColor] = useState(50)
	const [carat, setCarat] = useState(50)
	const [clarity, setClarity] = useState(50)
	const [price, setPrice] = useState(50)
	const labels = ['M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D']

	useEffect(() => {
		getAllProductsByCategory('diamond').then((res) => {
			setDiamonds(res.data)
		})
	}, [])

	const handleClick = (product_id) => {
		dispatch(updateDiamondDetails({ product_id: product_id }))
		dispatch(setShowDiamond(true))
	}

	return (
		<>
			{/* Tabs */}
			<div className="flex space-x-4 mb-4">
				<button
					onClick={() => setActiveTab('Natural')}
					className={`px-4 py-2 border border-black shadow-md ${
						activeTab === 'Natural'
							? 'bg-black text-white'
							: 'bg-white text-black'
					}`}
				>
					Natural
				</button>
				<button
					onClick={() => setActiveTab('Lab Grown')}
					className={`px-4 py-2 border border-black shadow-md ${
						activeTab === 'Lab Grown'
							? 'bg-black text-white'
							: 'bg-white text-black'
					}`}
				>
					Lab Grown
				</button>
			</div>
			{/* Filters */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-center">
				<div className="p-4">
					<h3 className="text-left">Shape</h3>
					<div className="grid grid-cols-10 gap-2 mt-2 relative">
						{[
							'Round',
							'Princess',
							'Oval',
							'Marquise',
							'Cushion',
							'Emerald',
							'Heart',
							'Pear',
							'Asscher',
							'Radiant',
						].map((shape, index) => (
							<div key={shape} className="relative">
								<div className="p-2 border border-black rounded text-black text-sm flex items-center justify-center">
									<i className="fas fa-gem mr-2 text-black"></i>{' '}
									{/* Example icon, you can replace it with your own */}
									{index + 1}
								</div>
								<span className="absolute bottom-0 left-0 w-full text-center text-black text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									{shape}
								</span>
							</div>
						))}
					</div>
				</div>

				<div className="p-4">
					<h3 className="text-left">Cut</h3>
					<div className="mt-2 relative">
						<input
							type="range"
							min="1"
							max="4"
							value={cut}
							onChange={(e) => setCut(e.target.value)}
							className="w-full h-1 bg-black appearance-none cursor-pointer"
							style={{
								background: `linear-gradient(to right, #000000 0%, #000000 ${cut}%, #ffffff ${cut}%, #ffffff 100%)`,
							}}
						/>
						<div className="absolute top-full left-0 w-full flex justify-between px-4 text-black text-xs">
							<span>Good</span>
							<span>Very Good</span>
							<span>Ideal</span>
							<span>True Hearts</span>
						</div>
					</div>
				</div>

				<div className="p-4">
					<h3 className="text-left">Color</h3>
					<div className="relative">
						<input
							type="range"
							min="1"
							max="20"
							value={color}
							onChange={(e) => setColor(e.target.value)}
							className="w-full h-2 rounded-lg appearance-none cursor-pointer outline-none"
							style={{
								background: `linear-gradient(to right, #000000 0%, #000000 ${
									color * 5
								}%, #ffffff ${color * 5}%, #ffffff 100%)`,
							}}
						/>
						<div className="flex justify-between mt-2 text-sm text-gray-700">
							{labels.map((label, index) => (
								<span key={index} className="text-center w-full">
									{label}
								</span>
							))}
						</div>
					</div>
				</div>

				<div className="p-4">
					<h3 className="text-left">Carat</h3>
					<input
						type="range"
						min="1"
						max="100"
						value={carat}
						onChange={(e) => setCarat(e.target.value)}
						className="w-full h-1 bg-black appearance-none cursor-pointer"
						style={{
							background: `linear-gradient(to right, #000000 0%, #000000 ${carat}%, #ffffff ${carat}%, #ffffff 100%)`,
						}}
					/>
					<div className="mt-2 text-black text-xs">
						<span>Selected Carat: {(carat / 100).toFixed(2)} carats</span>
					</div>
				</div>

				<div className="p-4">
					<h3 className="text-left">Clarity</h3>
					<div className="mt-2 relative">
						<input
							type="range"
							min="1"
							max="9"
							value={clarity}
							onChange={(e) => setClarity(e.target.value)}
							className="w-full h-1 bg-black appearance-none cursor-pointer"
							style={{
								background: `linear-gradient(to right, #000000 0%, #000000 ${clarity}%, #ffffff ${clarity}%, #ffffff 100%)`,
							}}
						/>
						<div className="absolute top-full left-0 w-full flex justify-between px-4 text-black text-xs">
							<span>I1</span>
							<span>SI2</span>
							<span>SI1</span>
							<span>VS2</span>
							<span>VS1</span>
							<span>VVS2</span>
							<span>VVS1</span>
							<span>IF</span>
							<span>FL</span>
						</div>
					</div>
				</div>

				<div className="p-4">
					<h3 className="text-left">Price</h3>
					<input
						type="range"
						min="1"
						max="100"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						className="w-full h-1 bg-black appearance-none cursor-pointer"
						style={{
							background: `linear-gradient(to right, #000000 0%, #000000 ${price}%, #ffffff ${price}%, #ffffff 100%)`,
						}}
					/>
					<div className="mt-2 text-black text-xs">
						<span>Selected Price: ${price * 10}</span>
					</div>
				</div>
			</div>
			<div className="min-h-screen flex flex-col items-center">
				<main className="flex-1 w-full  p-8">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
						{diamonds.map((product, index) => (
							<button
								onClick={() => handleClick(product.product_id)}
								key={product.product_id}
								className="bg-white shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl border border-[#be9080]"
							>
								<img
									src={
										hoveredImage === index ? diamondHoverImage : diamondImage
									}
									alt={product.name}
									className="w-full h-72 object-cover border-b border-[#be9080] transition duration-1000 ease-in-out"
									onMouseEnter={() => setHoveredImage(index)}
									onMouseLeave={() => setHoveredImage(null)}
								/>
								<div className="p-4">
									<h2 className="text-xl font-light mb-2 text-[#be9080]">
										{product.name}
									</h2>
									<p className="text-[#be9080] mb-4 text-lg font-light">
										{currency}
										{product[`diamond_price_${country}`]}
									</p>
								</div>
							</button>
						))}
					</div>
				</main>
			</div>
		</>
	)
}

export default DiamondGrid
