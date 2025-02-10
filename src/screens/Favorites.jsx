import { useEffect } from 'react'
import { useUser, SignInButton } from '@clerk/clerk-react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserFavorites } from '../redux/favoritesCartSlice'

const Favorites = () => {
	const { user, isSignedIn } = useUser()

	const dispatch = useDispatch()
	const { favorites, loading } = useSelector((state) => state.favoritesCart)

	useEffect(() => {
		if (isSignedIn && user?.id) {
			dispatch(fetchUserFavorites(user.id))
		}
	}, [isSignedIn, user?.id, dispatch])

	if (!isSignedIn) {
		return (
			<div className="h-80 flex flex-col items-center justify-center bg-gray-50">
				<h2 className="text-2xl font-semibold text-gray-700 mb-4">
					Please log in to view your Favorites
				</h2>
				<SignInButton mode="modal">
					<button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
						Log In
					</button>
				</SignInButton>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-gray-50 p-8">
			<h1 className="text-3xl font-bold text-gray-800 mb-8">Your Favorites</h1>

			{loading ? (
				<p>Loading favorites...</p>
			) : favorites.length === 0 ? (
				<p className="text-gray-600">Your favorites list is empty.</p>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{favorites.map((item) => (
						<div
							key={item.id}
							className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
						>
							<img
								src={item.image}
								alt={item.name}
								className="w-full h-40 object-cover rounded-lg mb-4"
							/>
							<h2 className="text-lg font-semibold text-gray-800">
								{item.name}
							</h2>
							<p className="text-gray-600 mb-2">{item.description}</p>
							<p className="text-xl font-bold text-blue-600">${item.price}</p>
							<button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
								Remove from Favorites
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Favorites
