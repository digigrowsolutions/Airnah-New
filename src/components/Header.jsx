import { useState, useEffect } from 'react'
import { ShoppingCart, Heart, Search } from 'lucide-react'
import LOGO from '../assets/logo.webp'
import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
	useUser,
} from '@clerk/clerk-react'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser, setUser } from '../redux/authSlice'
import { setCountry } from '../redux/localizationSlice'
import { Link } from 'react-router-dom'
import { menuItems } from '../utils/menuItems'
import {
	fetchUserCartItems,
	fetchUserFavorites,
} from '../redux/favoritesCartSlice'

export default function Header() {
	const [dropdownOpen, setDropdownOpen] = useState(null)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const dispatch = useDispatch()
	const { country } = useSelector((state) => state.localization)
	const { favorites, cartItems } = useSelector((state) => state.favoritesCart)
	const { user, isSignedIn } = useUser()

	useEffect(() => {
		if (isSignedIn) {
			dispatch(
				setUser({ id: user.id, email: user.emailAddresses[0].emailAddress })
			)
			dispatch(fetchUserFavorites(user.id))
			dispatch(fetchUserCartItems(user.id))
		} else {
			dispatch(clearUser())
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, isSignedIn])

	const handleMobileMenuToggle = () => {
		setMobileMenuOpen(!mobileMenuOpen)
	}

	const handleCountryChange = (event) => {
		dispatch(setCountry(event.target.value))
	}

	return (
		<header className="bg-white shadow-md w-full p-4 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				{/* Logo */}
				<div className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
					<img src={LOGO} alt="Brand Logo" className="h-20 w-auto" />
				</div>

				<Link to="/customize">Customize</Link>

				{/* Navigation */}
				<nav className="flex-1 flex justify-center space-x-6">
					{Array.isArray(menuItems) && menuItems.length > 0
						? menuItems.map((item, index) => (
								<div
									key={index}
									className="relative group cursor-pointer text-gray-700 hover:text-gray-900 font-medium"
									onMouseEnter={() => setDropdownOpen(index)}
									onMouseLeave={() => setDropdownOpen(null)}
								>
									{item.name}

									{/* Dropdown Menu */}
									{dropdownOpen === index && item.submenu && (
										<div className="fixed z-10 left-0 bg-white border rounded-lg shadow-lg w-full grid grid-cols-2">
											<div className="max-w-7xl w-full grid grid-cols-3 gap-6 px-6">
												{item.submenu.map((category, catIndex) => (
													<div key={catIndex}>
														<h3 className="text-gray-900 font-semibold mb-2">
															{category.heading}
														</h3>
														<ul className="space-y-1">
															{category.items &&
																category.items.map((subitem, subIndex) => (
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
						  ))
						: null}
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
					<button className="p-2 rounded-full hover:bg-gray-100 relative">
						<Heart size={20} />
					</button>
					{favorites ? favorites.length : '0'}

					<button className="p-2 rounded-full hover:bg-gray-100 relative">
						<ShoppingCart size={20} />
					</button>
					{cartItems ? cartItems.length : '(0)'}

					{/* Mobile Menu */}
					<button
						className="md:hidden p-2 rounded-full hover:bg-gray-100"
						onClick={handleMobileMenuToggle}
					>
						☰
					</button>

					<select
						value={country}
						onChange={handleCountryChange}
						className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
					>
						<option value="EN">🇬🇧 English</option>
						<option value="FR">🇫🇷 French</option>
						<option value="DE">🇩🇪 German</option>
					</select>
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
