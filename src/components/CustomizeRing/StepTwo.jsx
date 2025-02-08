import { useDispatch, useSelector } from 'react-redux'
import {
	setStep,
	updateCustomization,
} from '../../redux/ringCustomizationSlice'

const StepTwo = () => {
	const dispatch = useDispatch()
	const stone = useSelector((state) => state.ringCustomization.stone)

	return (
		<div className="p-6 bg-white shadow-lg rounded-lg text-center w-96 mx-auto">
			<h2 className="text-xl font-semibold mb-4">Step 2: Choose Stone</h2>
			<select
				className="p-2 border rounded w-full"
				value={stone}
				onChange={(e) =>
					dispatch(updateCustomization({ key: 'stone', value: e.target.value }))
				}
			>
				<option value="diamond">Diamond</option>
				<option value="ruby">Ruby</option>
				<option value="emerald">Emerald</option>
			</select>
			<div className="mt-4 flex justify-between">
				<button
					className="bg-gray-500 px-4 py-2 rounded"
					onClick={() => dispatch(setStep(1))}
				>
					Back
				</button>
				<button
					className="bg-blue-500 px-4 py-2 rounded"
					onClick={() => dispatch(setStep(3))}
				>
					Next
				</button>
			</div>
		</div>
	)
}

export default StepTwo
