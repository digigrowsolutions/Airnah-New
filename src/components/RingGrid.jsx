import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShowRing, updateRingDetails } from '../redux/ringCustomizationSlice'
import { convertPrice } from '../utils/helpers'
import { useUser } from '@clerk/clerk-react'
import { fetchStyles } from '../redux/userProductsSlice'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import {
	addToFavorites,
	fetchUserFavorites,
	removeFromFavorites,
} from '../redux/favoritesCartSlice'
import ImageCarousel from './ImageCarousel'

function RingGrid() {
	const dispatch = useDispatch()
	const { styles } = useSelector((state) => state.userProducts)
	const { currency, country, INR_rate, GBP_rate } = useSelector(
		(state) => state.localization
	)
	const { user } = useUser()
	const dbId = user?.publicMetadata?.dbId
	const [favoriteStatus, setFavoriteStatus] = useState({})

	useEffect(() => {
		dispatch(fetchStyles(dbId))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dbId, dispatch])

	useEffect(() => {
		const favStatus = {}
		styles.forEach((product) => {
			favStatus[product.ring_style_id] = product.favorite_id !== null
		})
		setFavoriteStatus(favStatus)
	}, [styles])

	const handleClick = (product_id) => {
		dispatch(updateRingDetails({ product_id: product_id }))
		dispatch(setShowRing(true))
	}

	const handleFavorite = (e, product_id, favorite_id) => {
		e.stopPropagation()

		const isCurrentlyFavorite = favoriteStatus[product_id]

		if (isCurrentlyFavorite) {
			dispatch(
				removeFromFavorites({
					userId: dbId,
					ring_style_id: favorite_id,
				})
			).then(() => {
				dispatch(fetchStyles(dbId)) // ✅ Re-fetch products after updating favorites
				dispatch(fetchUserFavorites(dbId))
			})
		} else {
			dispatch(
				addToFavorites({
					dbId,
					ring_style_id: product_id,
				})
			).then(() => {
				dispatch(fetchStyles(dbId)) // ✅ Re-fetch products after adding to favorites
			})
		}
	}

	return (
		<>
			<div className="min-h-screen bg-white flex flex-col items-center">
				<main className="flex-1 w-full p-8">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
						{styles.map((product, index) => (
							<button
								onClick={() => handleClick(product.ring_style_id)}
								key={product.ring_style_id}
								className="bg-white shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl border border-[#be9080]"
							>
								<div
									className="absolute bottom-20 right-4 text-2xl cursor-pointer text-[#be9080]"
									onClick={(e) =>
										handleFavorite(
											e,
											product.ring_style_id,
											product.favorite_id
										)
									}
								>
									{product.favorite_id ? (
										<FaHeart className="text-red-500" />
									) : (
										<FaRegHeart />
									)}
								</div>
								<ImageCarousel
									images={product.image_URL}
									className="w-full h-72 object-cover border-b border-[#be9080] transition duration-500 ease-in-out"
								/>
								<div className="p-4">
									<h2 className="text-xl font-light mb-2 text-[#be9080]">
										{product.name}
									</h2>
									<p className="text-[#be9080] text-lg mb-4 font-light">
										{currency}
										{convertPrice(
											Number(product.head_style_price) +
												Number(product.head_metal_price) +
												Number(product.shank_style_price) +
												Number(product.shank_metal_price),
											country,
											INR_rate,
											GBP_rate
										)}
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

export default RingGrid
