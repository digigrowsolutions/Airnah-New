import { useDispatch, useSelector } from 'react-redux'
import {
	updateCustomization,
	setStep,
} from '../../redux/ringCustomizationSlice'

const StepOne = () => {
	const dispatch = useDispatch()
	const metal = useSelector((state) => state.ringCustomization.metal)

	const productImages = {
		gold: 'https://via.placeholder.com/300x300?text=Gold+Ring',
		silver: 'https://via.placeholder.com/300x300?text=Silver+Ring',
		platinum: 'https://via.placeholder.com/300x300?text=Platinum+Ring',
	}

	return (
		<div className="flex flex-col lg:flex-row items-center lg:items-start justify-center min-h-screen p-10 bg-gray-50 space-y-8 lg:space-y-0 lg:space-x-12">
			{/* Product Image Section */}
			<div className="max-w-md">
				<img
					src={productImages[metal] || productImages.gold}
					alt={`${metal} ring`}
					className="w-full rounded-lg shadow-md"
				/>
			</div>

			{/* Selection Section */}
			<div className="bg-white shadow-xl p-8 rounded-lg w-full max-w-lg">
				<h2 className="text-2xl font-semibold mb-6 text-center">
					Step 1: Choose Metal
				</h2>

				{/* Radio Buttons for Metal Selection */}
				<div className="space-y-4">
					{['gold', 'silver', 'platinum'].map((option) => (
						<label
							key={option}
							className={`flex items-center p-4 border rounded-lg cursor-pointer hover:shadow-md ${
								metal === option
									? 'border-blue-500 bg-blue-50'
									: 'border-gray-200'
							}`}
						>
							<input
								type="radio"
								name="metal"
								value={option}
								checked={metal === option}
								onChange={(e) =>
									dispatch(
										updateCustomization({ key: 'metal', value: e.target.value })
									)
								}
								className="mr-3 accent-blue-500"
							/>
							<span className="text-lg capitalize">{option}</span>
						</label>
					))}
				</div>

				{/* Next Button */}
				<button
					className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
					onClick={() => dispatch(setStep(2))}
				>
					Next
				</button>
			</div>
		</div>
	)
}

export default StepOne
