import { useDispatch, useSelector } from 'react-redux'
import {
	updateDiamondDetails,
	setStep,
} from '../../redux/ringCustomizationSlice'
import Image from '../../assets/ring4.jpg'

const StepThree = () => {
	const dispatch = useDispatch()
	const size = useSelector((state) => String(state.ringCustomization.size))

	const productImages = {
		6: 'https://via.placeholder.com/300x300?text=Size+6',
		7: 'https://via.placeholder.com/300x300?text=Size+7',
		8: 'https://via.placeholder.com/300x300?text=Size+8',
	}

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
											updateDiamondDetails({
												key: 'size',
												value: e.target.value,
											})
										)
									}
									className="mr-3 accent-green-500"
								/>
								<span className="text-lg">Size {option}</span>
							</label>
						))}
					</div>
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
