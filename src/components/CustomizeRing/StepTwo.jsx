import { useDispatch, useSelector } from 'react-redux'
import {
	updateCustomization,
	setStep,
} from '../../redux/ringCustomizationSlice'
import Image from '../../assets/ring1.jpg'

const StepTwo = () => {
	const dispatch = useDispatch()
	const stone = useSelector((state) => state.ringCustomization.stone)

	const productImages = {
		diamond: 'https://via.placeholder.com/300x300?text=Diamond',
		ruby: 'https://via.placeholder.com/300x300?text=Ruby',
		emerald: 'https://via.placeholder.com/300x300?text=Emerald',
	}

	return (
		<div className="flex flex-col md:flex-row items-center gap-8">
			{/* Left Side - Image Grid */}
			<div className="w-full md:w-3/5 grid grid-cols-2 gap-4">
				<img
					src={Image}
					alt="Stone 1"
					className="w-full h-auto rounded-lg shadow-md"
				/>
				<img
					src={Image}
					alt="Stone 2"
					className="w-full h-auto rounded-lg shadow-md"
				/>
				<img
					src={Image}
					alt="Stone 3"
					className="w-full h-auto rounded-lg shadow-md"
				/>
				<img
					src={Image}
					alt="Stone 4"
					className="w-full h-auto rounded-lg shadow-md"
				/>
			</div>

			{/* Right Side - Content */}
			<div className="w-full md:w-2/5 space-y-4">
				<h2 className="text-2xl font-semibold">Choose Your Stone</h2>
				<p className="text-gray-600">Select the perfect stone for your ring</p>
				<div className="space-y-2">
					{['diamond', 'ruby', 'emerald'].map((option) => (
						<label
							key={option}
							className={`flex items-center p-3 border rounded-lg cursor-pointer hover:shadow-md ${
								stone === option ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
							}`}
						>
							<input
								type="radio"
								name="stone"
								value={option}
								checked={stone === option}
								onChange={(e) =>
									dispatch(updateCustomization({ key: 'stone', value: e.target.value }))
								}
								className="mr-3 accent-blue-500"
							/>
							<span className="text-lg capitalize">{option}</span>
						</label>
					))}
				</div>
				<div className="border-t pt-4 space-y-2 text-gray-700">
					<button
						onClick={() => dispatch(setStep(1))}
						className="px-6 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-700"
					>
						Back
					</button>
					<button
						onClick={() => dispatch(setStep(3))}
						className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 ml-4"
					>
						Next
					</button>
				</div>
			</div>
		</div>
	)
}

export default StepTwo