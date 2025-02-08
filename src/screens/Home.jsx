import React, { useState, useEffect } from 'react'
import '../styles/global.css'
import { motion } from 'framer-motion'
import EngagementRing from '../assets/banner.webp'
import WeddingRing from '../assets/banner2.webp'
import ring1 from '../assets/Prong2.png' // Adjust the path as needed
import ring2 from '../assets/demo2.png'
import ring3 from '../assets/demoringcarousel.png'
import ring4 from '../assets/pave-engagement-ring.png'
import ring5 from '../assets/pave-engagement-ring (1).png'
import bannerring from '../assets/Prong2.png'
import model from '../assets/Wedding-rings.jpg'
import bgImage2 from '../assets/mesh-236.png' // Path to your background image
import bgImage from '../assets/twy_BG.png' // Path to your background image
import leftImage from '../assets/twy.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const diamonds = [
	{ id: 1, image: ring5, title: 'Brilliant Cut' },
	{ id: 2, image: ring1, title: 'Princess Cut' },
	{ id: 3, image: ring2, title: 'Emerald Cut' },
	{ id: 4, image: ring3, title: 'Oval Cut' },
	{ id: 5, image: ring4, title: 'Pear Cut' },
	{ id: 6, image: ring5, title: 'Cushion Cut' },
	{ id: 7, image: ring1, title: 'Radiant Cut' },
	{ id: 8, image: ring2, title: 'Asscher Cut' },
	{ id: 9, image: ring3, title: 'Marquise Cut' },
	{ id: 10, image: ring4, title: 'Heart Cut' },
]
function Home() {
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

			<section className="px-4 py-8 ">
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
			<section className="px-4 py-8 ">
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
			<section className=" py-8">
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
			<section className="grid grid-cols-1 md:grid-cols-3 w-full ">
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
			<section
				className="relative bg-cover bg-center bg-no-repeat  bg-fixed flex flex-col md:flex-row items-center justify-space-between "
				style={{
					backgroundImage: `url(${bgImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundAttachment: 'fixed',
					height: '800px',
				}}
			>
				{/* Left Container - Image */}
				<div className="md:w-1/2">
					<img
						src={leftImage}
						alt="Hero"
						className="w-full h-auto rounded-xl"
					/>
				</div>

				{/* Right Container - Text */}
				<div
					className="md:w-1/2 flex flex-col justify-center p-10"
					style={{ margin: 'auto' }}
				>
					<h2 className="text-3xl font-bold text-gray-800 text-center">
						The Brilliance of Diamonds
					</h2>
					<p className="mt-4 text-gray-600 text-center">
						Diamonds are formed under intense heat and pressure deep within the
						Earth’s crust. Their unmatched hardness and brilliant sparkle make
						them the most coveted gemstones.
					</p>
					<p className="mt-2 text-gray-600 text-center">
						Did you know? The largest diamond ever found, the Cullinan Diamond,
						weighed an astonishing 3,106 carats!
					</p>

					{/* Buttons */}
					<div className="mt-6 flex justify-center gap-4">
						<button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
							Learn More
						</button>
						<button className="px-6 py-3 bg-black-600 text-white rounded-lg shadow-md hover:bg-green-700">
							Shop Now
						</button>
					</div>
				</div>
			</section>
			<div className="relative w-full max-w-4xl mx-auto p-4">
				<h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
					EXPERIENCE THE <br /> DIAMOND REVOLUTION
				</h2>
				<p className="text-lg text-gray-600 mb-6 text-center">
					Spin actual diamonds in 360° HD and zoom in up to 40x. One of the
					world's biggest collections of loose diamonds, at your fingertips.
				</p>
				{/* Left Arrow */}
				<div className="swiper-button-prev absolute top-1/2 left-2 z-10 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg cursor-pointer hover:bg-gray-200 transition">
					<ChevronLeft
						className="text-gray-600 hover:text-gray-900"
						size={16}
					/>
				</div>

				{/* Swiper Component */}
				<Swiper
					modules={[Navigation, Autoplay]}
					spaceBetween={20}
					slidesPerView={5}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					loop={true}
					className="rounded-lg"
				>
					{diamonds.map((diamond) => (
						<SwiperSlide key={diamond.id} className="text-center">
							<img
								src={diamond.image}
								alt={diamond.title}
								className="w-full h-40 object-cover "
							/>
							<p className="mt-2 text-lg font-light">{diamond.title}</p>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Right Arrow */}
				<div className="swiper-button-next absolute top-1/2 right-2 z-10 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg cursor-pointer hover:bg-gray-200 transition">
					<ChevronRight
						className="text-gray-600 hover:text-gray-900"
						size={16}
					/>
				</div>
			</div>
			<section
				className="flex justify-center"
				style={{
					backgroundImage: `url(${bgImage2})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundAttachment: 'fixed',
					height: '800px',
				}}
			>
				<div className="max-w-6xl w-full">
					<h2 className="text-4xl font-bold text-center text-gray-800 mb-4 uppercase">
						The Crowning Jewels
					</h2>
					<p className="text-lg text-center text-gray-600 mb-8">
						Our diamond and gemstone fine jewelry collection offers hand-crafted
						pieces of unforgettable luxury that are perfect for any occasion.
					</p>
					<div className="flex flex-col md:flex-row gap-6">
						<div className="relative flex-1">
							<img
								src="/path-to-image.jpg"
								alt="Jewelry"
								className="w-full h-full object-cover rounded-xl shadow-lg"
							/>
							<div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-4 rounded-lg shadow-md">
								<p className="text-gray-700 text-lg font-semibold">
									Exquisite craftsmanship in every detail.
								</p>
							</div>
						</div>
						<div className="relative flex-1">
							<img
								src="/path-to-image2.jpg"
								alt="Jewelry"
								className="w-full h-full object-cover rounded-xl shadow-lg"
							/>
							<div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-4 rounded-lg shadow-md">
								<p className="text-gray-700 text-lg font-semibold">
									Timeless elegance for every occasion.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
