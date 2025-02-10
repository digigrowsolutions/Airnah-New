import { useSelector } from 'react-redux'
import StepOne from '../components/CustomizeRing/StepOne'
import StepTwo from '../components/CustomizeRing/StepTwo'
import StepThree from '../components/CustomizeRing/StepThree'

const CustomizeRing = () => {
	const step = useSelector((state) => state.ringCustomization.step)

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col p-10">
			<h1 className="text-3xl font-bold mb-8 text-center">
				Customize Your Ring
			</h1>

			{/* Steps Navigation */}
			<div className="flex justify-center mb-8 space-x-8">
				{['Step 1', 'Step 2', 'Step 3'].map((label, index) => (
					<div
						key={index}
						className={`py-2 px-6 border-b-4 transition-all ${
							step === index + 1
								? 'border-blue-500 font-semibold text-blue-600'
								: 'border-transparent text-gray-500'
						}`}
					>
						{label}
					</div>
				))}
			</div>

			{/* Step Content */}
			<div className="flex-1 flex justify-center items-start">
				{step === 1 && <StepOne />}
				{step === 2 && <StepTwo />}
				{step === 3 && <StepThree />}
			</div>
		</div>
	)
}

export default CustomizeRing
