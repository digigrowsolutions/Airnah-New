import { useDispatch, useSelector } from 'react-redux'
import {
	updateCustomization,
	setStep,
} from '../../redux/ringCustomizationSlice'

const StepOne = () => {
	const dispatch = useDispatch()
	const metal = useSelector((state) => state.ringCustomization.metal)

	return (
		<div className="p-6 bg-white shadow-lg rounded-lg text-center w-96 mx-auto">
			<h2 className="text-xl font-semibold mb-4">Step 1: Choose Metal</h2>
			<select
				className="p-2 border rounded w-full"
				value={metal}
				onChange={(e) =>
					dispatch(updateCustomization({ key: 'metal', value: e.target.value }))
				}
			>
				<option value="gold">Gold</option>
				<option value="silver">Silver</option>
				<option value="platinum">Platinum</option>
			</select>
			<button
				className="mt-4 bg-blue-500 px-4 py-2 rounded"
				onClick={() => dispatch(setStep(2))}
			>
				Next
			</button>
		</div>
	)
}

export default StepOne
