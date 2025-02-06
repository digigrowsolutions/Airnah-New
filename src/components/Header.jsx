import { useState } from 'react'
import { ShoppingCart, User, Heart, Search } from 'lucide-react'
import LOGO from '../assets/logo.webp'
import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from '@clerk/clerk-react'

export default function Header() {
	const [dropdownOpen, setDropdownOpen] = useState(null)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const menuItems = [
		{
			name: 'Engagement Rings',
			submenu: [
				{
					heading: 'Design Your Own',
					items: [
						'Start with a Setting',
						'Start with a Diamond',
						'Start With A Lab Grown Diamond',
						'Start with a Gemstone',
					],
				},
				{
					heading: 'Ready-to-Ship',
					items: [
						'Ready to Ship Engagement Rings',
						'Preset Diamond Engagement Rings',
					],
				},
				{
					heading: 'Popular Styles',
					items: [
						'Round Cut Rings',
						'Princess Cut Rings',
						'Cushion Cut Rings',
						"Explore Men's Engagement Rings",
						'Top Engagement Rings',
						'Customize Your Engagement Ring',
						'The Ring Studio',
					],
				},
				{
					heading: 'Engagement Ring Styles',
					items: [
						'Solitaire',
						'Pavé',
						'Channel-Set',
						'Side-Stone',
						'Bezel',
						'Halo',
						'Hidden Halo',
						'Three-Stone',
					],
				},
				{
					heading: 'More Styles',
					items: [
						'Tension',
						'Floral',
						'Tiara',
						'Vintage',
						'Unique',
						'Cathedral',
						'Cluster',
					],
				},
				{
					heading: 'Shop by Metal',
					items: ['Rose Gold', 'White Gold', 'Yellow Gold', 'Platinum'],
				},
			],
		},
		{
			name: 'Wedding Rings',
			submenu: [
				{
					heading: 'Women',
					items: ['Classic Wedding Rings', 'Diamond Rings'],
				},
				{
					heading: 'Men',
					items: [
						'Classic Wedding Rings',
						'Carved Rings',
						'Diamond Rings',
						'Alternative Metal Rings',
					],
				},
				{
					heading: "Men's Wedding Bands",
					items: ['DIAMOND CLASSICS NEW'],
				},
				{
					heading: 'Eternity Rings',
					items: [],
				},
				{
					heading: 'Anniversary Rings',
					items: [],
				},
				{
					heading: 'Diamond Jewelry',
					items: ['Diamond Studs', 'Diamond Pendants'],
				},
				{
					heading: 'Shop by Metal',
					items: ['Rose Gold', 'White Gold', 'Yellow Gold', 'Platinum'],
				},
				{
					heading: 'Learn About Wedding Rings',
					items: ['In the Wedding Guide'],
				},
			],
		},
		{
			name: 'Diamonds',
			submenu: ['Round Cut', 'Princess Cut', 'Emerald Cut'],
		},
		{
			name: 'Gemstones',
			submenu: ['Sapphire', 'Ruby', 'Emerald'],
		},
		{
			name: 'Fine Jewelry',
			submenu: ['Earrings', 'Bracelets', 'Necklaces'],
		},

	]

	const handleMenuClick = (index) => {
		setDropdownOpen((prev) => (prev === index ? null : index)) // Toggle the dropdown on click
	}

	const handleMobileMenuToggle = () => {
		setMobileMenuOpen(!mobileMenuOpen)
	}

	return (
		<header className="bg-white shadow-md w-full p-4 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				{/* Logo */}
				<div className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
					<img src={LOGO} alt="Brand Logo" className="h-20 w-auto" />
				</div>

				{/* Navigation */}
				<nav className="hidden md:flex space-x-6">
					{menuItems.map((item, index) => (
						<div
							key={index}
							className="relative group cursor-pointer text-gray-700 hover:text-gray-900 font-medium"
							onClick={() => handleMenuClick(index)} // Trigger dropdown on click
						>
							{item.name}

							{/* Dropdown Menu */}
							{dropdownOpen === index && item.submenu.length > 0 && (
								<div className="absolute left-0 right-0 top-180 w-screen bg-white shadow-md py-4 z-50 flex justify-center">
									<div className="max-w-7xl w-full grid grid-cols-3 gap-6 px-6">
										{item.submenu.map((category, catIndex) => (
											<div key={catIndex}>
												<h3 className="text-gray-900 font-semibold mb-2">
													{category.heading}
												</h3>
												<ul className="space-y-1">
													{category.items.map((subitem, subIndex) => (
														<li
															key={subIndex}
															className="text-gray-700 hover:text-gray-900 cursor-pointer"
														>
															{subitem}
														</li>
													))}
												</ul>
											</div>
										))}
									</div>
								</div>
							)}
						</div>
					))}
				</nav>

				{/* Right Controls */}
				<div className="flex items-center space-x-4">
					{/* Search Bar */}
					<div className="hidden md:flex items-center space-x-2">
    <input
        type="text"
        placeholder="Search"
        className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 w-48"
    />
    <Search className="text-gray-500 cursor-pointer" size={18} />
</div>



					{/* Icons */}
					<SignedIn>
						<button className="p-2 rounded-full hover:bg-gray-100">
							<UserButton size={20} />
						</button>
					</SignedIn>
					<SignedOut>
						<SignInButton />
					</SignedOut>
					<button className="p-2 rounded-full hover:bg-gray-100">
						<Heart size={20} />
					</button>
					<button className="p-2 rounded-full hover:bg-gray-100">
						<ShoppingCart size={20} />
					</button>

					{/* Mobile Menu */}
					<button
						className="md:hidden p-2 rounded-full hover:bg-gray-100"
						onClick={handleMobileMenuToggle}
					>
						☰
					</button>
				</div>
			</div>

			{/* Mobile Dropdown */}
			{mobileMenuOpen && (
				<div className="md:hidden bg-white shadow-md p-4 flex flex-col space-y-2">
					{menuItems.map((item, index) => (
						<div
							key={index}
							className="text-gray-700 hover:text-gray-900 font-medium"
						>
							{item.name}
							{item.submenu.length > 0 && (
								<div className="space-y-2">
									{item.submenu.map((category, catIndex) => (
										<div key={catIndex}>
											<h3 className="text-gray-900 font-semibold">
												{category.heading}
											</h3>
											<ul className="space-y-1">
												{category.items.map((subitem, subIndex) => (
													<li
														key={subIndex}
														className="text-gray-700 hover:text-gray-900"
													>
														{subitem}
													</li>
												))}
											</ul>
										</div>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			)}
		</header>
	)
} 