import { useDispatch, useSelector } from 'react-redux'
import {
	setStep,
	updateCustomization,
} from '../../redux/ringCustomizationSlice'

const StepThree = () => {
	const dispatch = useDispatch()
	const size = useSelector((state) => state.ringCustomization.size)

	return (
		<div className="p-6 bg-white shadow-lg rounded-lg text-center w-96 mx-auto">
			<h2 className="text-xl font-semibold mb-4">Step 3: Choose Size</h2>
			<select
				className="p-2 border rounded w-full"
				value={size}
				onChange={(e) =>
					dispatch(updateCustomization({ key: 'size', value: e.target.value }))
				}
			>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
			</select>
			<div className="mt-4 flex justify-between">
				<button
					className="bg-gray-500 px-4 py-2 rounded"
					onClick={() => dispatch(setStep(2))}
				>
					Back
				</button>
				<button
					className="bg-green-500 px-4 py-2 rounded"
					onClick={() => alert('Customization Complete!')}
				>
					Finish
				</button>
			</div>
		</div>
	)
}

export default StepThree
