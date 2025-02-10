import { useDispatch, useSelector } from 'react-redux'
import {
	setStep,
	updateCustomization,
} from '../../redux/ringCustomizationSlice'

const StepThree = () => {
	const dispatch = useDispatch()
	const size = useSelector((state) => state.ringCustomization.size)

	const productImages = {
		6: 'https://via.placeholder.com/300x300?text=Size+6',
		7: 'https://via.placeholder.com/300x300?text=Size+7',
		8: 'https://via.placeholder.com/300x300?text=Size+8',
	}

	return (
		<div className="flex flex-col lg:flex-row items-center lg:items-start justify-center min-h-screen p-10 bg-gray-50 space-y-8 lg:space-y-0 lg:space-x-12">
			{/* Product Image Section */}
			<div className="max-w-md">
				<img
					src={productImages[size] || productImages[6]}
					alt={`Ring size ${size}`}
					className="w-full rounded-lg shadow-md"
				/>
			</div>

			{/* Selection Section */}
			<div className="bg-white shadow-xl p-8 rounded-lg w-full max-w-lg">
				<h2 className="text-2xl font-semibold mb-6 text-center">
					Step 3: Choose Size
				</h2>

				{/* Size Selection as Radio Buttons */}
				<div className="space-y-4">
					{['6', '7', '8'].map((option) => (
						<label
							key={option}
							className={`flex items-center p-4 border rounded-lg cursor-pointer hover:shadow-md ${
								size === option
									? 'border-green-500 bg-green-50'
									: 'border-gray-200'
							}`}
						>
							<input
								type="radio"
								name="size"
								value={option}
								checked={size === option}
								onChange={(e) =>
									dispatch(
										updateCustomization({ key: 'size', value: e.target.value })
									)
								}
								className="mr-3 accent-green-500"
							/>
							<span className="text-lg">Size {option}</span>
						</label>
					))}
				</div>

				{/* Navigation Buttons */}
				<div className="mt-6 flex justify-between">
					<button
						className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
						onClick={() => dispatch(setStep(2))}
					>
						Back
					</button>
					<button
						className="bg-green-600 py-2 px-4 rounded-lg hover:bg-green-700 transition"
						onClick={() => alert('Customization Complete!')}
					>
						Finish
					</button>
				</div>
			</div>
		</div>
	)
}

export default StepThree
