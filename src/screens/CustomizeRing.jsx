import { useSelector } from 'react-redux'
import StepOne from '../components/CustomizeRing/StepOne'
import StepTwo from '../components/CustomizeRing/StepTwo'
import StepThree from '../components/CustomizeRing/StepThree'

const CustomizeRing = () => {
	const step = useSelector((state) => state.ringCustomization.step)

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
			<h1 className="text-2xl font-bold mb-6">Customize Your Ring</h1>
			{step === 1 && <StepOne />}
			{step === 2 && <StepTwo />}
			{step === 3 && <StepThree />}
		</div>
	)
}

export default CustomizeRing
