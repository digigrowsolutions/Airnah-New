import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import EngagementRing from '../assets/banner.webp'
import WeddingRing from '../assets/banner2.webp'
import ring1 from '../assets/ring1.jpg'
import ring2 from '../assets/ring2.jpg'
import ring3 from '../assets/ring3.jpg'
import ring4 from '../assets/ring4.jpg'
import ring5 from '../assets/ring4.jpg'
import bannerring from '../assets/Prong2.png'
import model from '../assets/Wedding-rings.jpg'
import demo from '../assets/demoringcarousel.png'

function Home() {
	const rings = [
		{
			id: 1,
			src: { demo },
			name: 'Classic Solitaire',
			description: 'A timeless beauty.',
		},
		{
			id: 2,
			src: { demo },
			name: 'Halo Diamond',
			description: 'Sparkling elegance.',
		},
		{
			id: 3,
			src: demo,
			name: 'Stackable Ring',
			description: 'Modern & stylish.',
		},
		{
			id: 4,
			src: { demo },
			name: 'Vintage Band',
			description: 'Antique-inspired grace.',
		},
		{
			id: 5,
			src: { demo },
			name: 'Twisted Diamond',
			description: 'Unique & elegant.',
		},
	]
	const [currentIndex, setCurrentIndex] = useState(2) // Start with the middle ring

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % rings.length)
		}, 3000)
		return () => clearInterval(interval)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const brands = [
		'Nike',
		'Adidas',
		'Gucci',
		'Prada',
		'Rolex',
		'Versace',
		'Chanel',
		'Puma',
		'Reebok',
		'Fendi',
		'Louis Vuitton',
		'Zara',
		'Hermès',
		'Burberry',
		'Cartier',
	]
	const [currentSlide, setCurrentSlide] = useState(0)

	// Define the slides with imported images
	const slides = [
		{
			image: EngagementRing,
			heading: 'New Modern Collection',
			subheading:
				"Elegance isn't solely defined by what you wear. It's how you carry yourself, how you speak, what you read.",
		},
		{
			image: WeddingRing,
			heading: 'Meet the lines of the millennium',
			subheading:
				'Fashion is to please your eye. Shapes and proportions are for your intellect. I have an obsession with details and pattern.',
		},
	]

	// Function to go to the next slide
	const goToNextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
	}

	// Function to go to the previous slide
	const goToPrevSlide = () => {
		setCurrentSlide(
			(prevSlide) => (prevSlide - 1 + slides.length) % slides.length
		)
	}

	// Set up auto-slide interval when the component mounts
	useEffect(() => {
		const intervalId = setInterval(goToNextSlide, 5000) // Change slide every 5 seconds

		// Clear interval on component unmount
		return () => clearInterval(intervalId)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div>
			{/* Hero Section with Carousel */}
			<section className="relative w-full h-[100vh]">
				{/* Carousel */}
				<div className="absolute inset-0 w-full h-full overflow-hidden">
					{slides.map((slide, index) => (
						<div
							key={index}
							className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
								currentSlide === index ? 'opacity-100' : 'opacity-0'
							}`}
							style={{
								backgroundImage: `url(${slide.image})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundAttachment: 'fixed',
							}}
						>
							<div className="absolute inset-0 w-full h-full bg-black opacity-40"></div>
							<div className="absolute inset-0 flex items-center justify-left px-4 md:px-8">
								<div className="text-white text-left p-10">
									<h1 className="text-4xl md:text-6xl font-bold">
										{slide.heading}
									</h1>
									<p className="text-lg md:text-xl mt-4">{slide.subheading}</p>
									{/* Shop Jewelry Button */}
									<button className="mt-6 mr-4 px-8 py-3 bg-black text-white text-lg font-semibold hover:bg-gray-800 border-1 border-white transition duration-300">
										Shop Jewelry
									</button>

									{/* Buy Diamonds Button */}
									<button className="mt-6 px-8 py-3 bg-white text-black text-lg font-semibold border-1 border-black hover:bg-gray-200 transition duration-300">
										Buy Diamonds
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Carousel Controls */}
				<button
					onClick={goToPrevSlide}
					className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 w-14 text-black bg-white m-2 hover:bg-opacity-75 rounded-full"
				>
					&#10094;
				</button>
				<button
					onClick={goToNextSlide}
					className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 w-14 text-black bg-white m-2 hover:bg-opacity-75 rounded-full"
				>
					&#10095;
				</button>
			</section>

			<section className="px-4 py-8 bg-gray-100">
				{/* Category List */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
					{[ring1, ring2, ring3, ring4, ring5].map((ring, index) => (
						<div
							key={index}
							className="shadow-lg relative group overflow-hidden"
						>
							<img
								src={ring}
								alt="Ring"
								className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
							/>
							<div className="absolute inset-0  flex items-end justify-center transition-opacity duration-300 group-hover:bg-opacity-30">
								<h3 className="text-lg font-semibold text-black">
									{
										[
											'Engagement Rings',
											'Wedding Rings',
											'Diamond Rings',
											'Gold Rings',
											'Platinum Rings',
										][index]
									}
								</h3>
							</div>
							<button className="absolute inset-0 flex items-center justify-center text-black text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								Shop Now
							</button>
						</div>
					))}
				</div>
			</section>
			<section className="px-4 py-8 bg-gray-100">
				{/* Two-Column Layout */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					{/* Left Side - Diamond Image */}
					<div className="flex justify-center">
						<img src={bannerring} alt="Diamond" className="w-full  max-w-md " />
					</div>

					{/* Right Side - Text Content */}
					<div className="text-center md:text-left">
						<h2 className="text-3xl font-bold text-gray-800">
							Design Your Own Engagement Ring
						</h2>
						<p className="mt-4 text-lg text-gray-600">
							Design your engagement ring your way. Start with a ring setting
							and then add the perfect center stone - or vice versa. It’s really
							up to you!
						</p>
						<div className="mt-6 flex flex-col md:flex-row gap-4">
							<button className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition">
								Start with a Setting
							</button>
							<button className="bg-gray-600 text-white px-6 py-3  shadow-md hover:bg-gray-700 transition">
								Start with a Diamond
							</button>
						</div>
						<p className="mt-6 text-gray-500 italic">
							Spark your imagination with these recently purchased engagement
							rings.
						</p>
					</div>
				</div>
			</section>
			<section className="bg-gray-100 py-8">
				<div className="overflow-hidden whitespace-nowrap">
					<motion.div
						className="flex gap-12 text-2xl font-bold text-gray-700 uppercase"
						animate={{ x: ['0%', '-100%'] }}
						transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
					>
						{brands.concat(brands).map((brand, index) => (
							<div key={index} className="flex-none px-6 py-2">
								{brand}
							</div>
						))}
					</motion.div>
				</div>
			</section>
			<section className="grid grid-cols-1 md:grid-cols-3 w-full h-[400px]">
				{/* Box 1 */}
				<div className="relative group">
					<img
						src={model}
						alt="Box 1"
						className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
					<div className="absolute inset-0 flex items-center justify-center ">
						<h2 className="text-white text-3xl font-bold">Wedding Rings</h2>
					</div>
				</div>

				{/* Box 2 */}
				<div className="relative group">
					<img
						src={model}
						alt="Box 2"
						className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
					<div className="absolute inset-0 flex items-center justify-center ">
						<h2 className="text-white text-3xl font-bold">Fine Jewelry</h2>
					</div>
				</div>

				{/* Box 3 */}
				<div className="relative group">
					<img
						src={model}
						alt="Box 3"
						className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
					/>
					<div className="absolute inset-0 flex items-center justify-center ">
						<h2 className="text-white text-3xl font-bold">Engagement Rings</h2>
					</div>
				</div>
			</section>
			<section className="w-full bg-gray-100 py-16">
				<div className="max-w-6xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800">
						Our Exclusive Ring Collection
					</h2>
					<p className="text-gray-600 mt-2">
						Discover timeless elegance with our handcrafted rings.
					</p>
				</div>

				{/* Ring Carousel */}
				<div className="relative mt-10 flex justify-center overflow-hidden">
					<div className="flex space-x-6">
						{rings.map((ring, index) => {
							const isActive = index === currentIndex
							return (
								<motion.div
									key={ring.id}
									className="relative"
									initial={{ scale: 0.8, opacity: 0.6 }}
									animate={{
										scale: isActive ? 1.2 : 0.8,
										opacity: isActive ? 1 : 0.6,
									}}
									transition={{ type: 'spring', stiffness: 200, damping: 15 }}
								>
									<img
										src={ring.src}
										alt={ring.name}
										className="w-40 md:w-52 mx-auto cursor-pointer transition-all duration-500"
									/>
								</motion.div>
							)
						})}
					</div>
				</div>

				{/* Text Below Active Ring */}
				<div className="text-center mt-6">
					<motion.div
						key={rings[currentIndex].id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h3 className="text-xl md:text-2xl font-semibold text-gray-800">
							{rings[currentIndex].name}
						</h3>
						<p className="text-gray-600">{rings[currentIndex].description}</p>
					</motion.div>
				</div>
			</section>
		</div>
	)
}

export default Home
