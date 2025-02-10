import { useDispatch, useSelector } from 'react-redux'
import {
	setStep,
	updateCustomization,
} from '../../redux/ringCustomizationSlice'

const StepTwo = () => {
	const dispatch = useDispatch()
	const stone = useSelector((state) => state.ringCustomization.stone)

	const productImages = {
		diamond: 'https://via.placeholder.com/300x300?text=Diamond',
		ruby: 'https://via.placeholder.com/300x300?text=Ruby',
		emerald: 'https://via.placeholder.com/300x300?text=Emerald',
	}

	return (
		<div className="flex flex-col lg:flex-row items-center lg:items-start justify-center min-h-screen p-10 bg-gray-50 space-y-8 lg:space-y-0 lg:space-x-12">
			{/* Product Image Section */}
			<div className="max-w-md">
				<img
					src={productImages[stone] || productImages.diamond}
					alt={`${stone} stone`}
					className="w-full rounded-lg shadow-md"
				/>
			</div>

			{/* Selection Section */}
			<div className="bg-white shadow-xl p-8 rounded-lg w-full max-w-lg">
				<h2 className="text-2xl font-semibold mb-6 text-center">
					Step 2: Choose Stone
				</h2>

				{/* Radio Buttons for Stone Selection */}
				<div className="space-y-4">
					{['diamond', 'ruby', 'emerald'].map((option) => (
						<label
							key={option}
							className={`flex items-center p-4 border rounded-lg cursor-pointer hover:shadow-md ${
								stone === option
									? 'border-blue-500 bg-blue-50'
									: 'border-gray-200'
							}`}
						>
							<input
								type="radio"
								name="stone"
								value={option}
								checked={stone === option}
								onChange={(e) =>
									dispatch(
										updateCustomization({ key: 'stone', value: e.target.value })
									)
								}
								className="mr-3 accent-blue-500"
							/>
							<span className="text-lg capitalize">{option}</span>
						</label>
					))}
				</div>

				{/* Navigation Buttons */}
				<div className="mt-6 flex justify-between">
					<button
						className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
						onClick={() => dispatch(setStep(1))}
					>
						Back
					</button>
					<button
						className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
						onClick={() => dispatch(setStep(3))}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	)
}

export default StepTwo
