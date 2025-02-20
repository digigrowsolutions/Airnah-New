import { useDispatch, useSelector } from 'react-redux'
import { setStep, updateTotalCost } from '../../redux/ringCustomizationSlice'
import Image from '../../assets/ring4.jpg'
import { useEffect } from 'react'

const StepThree = () => {
	const dispatch = useDispatch()
	const { productDetails } = useSelector((state) => state.ringCustomization)

	useEffect(() => {
		dispatch(
			updateTotalCost({
				total_cost_INR:
					+productDetails[0].ring?.ring_price_INR +
					+productDetails[0].diamond?.diamond_price_INR,
				total_cost_GBP:
					+productDetails[0].ring?.ring_price_GBP +
					+productDetails[0].diamond?.diamond_price_GBP,
				total_cost_USD:
					+productDetails[0].ring?.ring_price_USD +
					+productDetails[0].diamond?.diamond_price_USD,
			})
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className="flex flex-col md:flex-row items-center gap-8">
			{/* Left Side - Image Grid */}
			<div className="w-full md:w-3/5 grid grid-cols-2 gap-4">
				<img
					src={Image}
					alt="Ring Size 6"
					className="w-full h-auto rounded-lg shadow-md"
				/>
				<img
					src={Image}
					alt="Ring Size 7"
					className="w-full h-auto rounded-lg shadow-md"
				/>
				<img
					src={Image}
					alt="Ring Size 8"
					className="w-full h-auto rounded-lg shadow-md"
				/>
				<img
					src={Image}
					alt="Ring Size Preview"
					className="w-full h-auto rounded-lg shadow-md"
				/>
			</div>

			{/* Right Side - Content */}
			<div className="w-full md:w-2/5 space-y-4">
				<h2 className="text-2xl font-semibold">Select Your Ring Size</h2>
				<p className="text-gray-600">
					Ensure a perfect fit for your engagement ring.
				</p>
				<div className="border-t pt-4 space-y-2 text-gray-700">
					<button
						onClick={() => dispatch(setStep(4))}
						className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
					>
						Finish
					</button>
				</div>
			</div>
		</div>
	)
}

export default StepThree
