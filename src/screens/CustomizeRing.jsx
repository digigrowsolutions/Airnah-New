import { useDispatch, useSelector } from 'react-redux'
import StepOne from '../components/CustomizeRing/StepOne'
import StepTwo from '../components/CustomizeRing/StepTwo'
import StepThree from '../components/CustomizeRing/StepThree'
import Image from '../assets/ring4.jpg'
import { setStep } from '../redux/ringCustomizationSlice'

const CustomizeRing = () => {
	const dispatch = useDispatch()
	const { step, productDetails } = useSelector(
		(state) => state.ringCustomization
	)
	const { currency, country } = useSelector((state) => state.localization)

	const steps = [
		{
			id: 1,
			title: 'Choose a Diamond',
			price: currency + productDetails[0].diamond?.[`total_cost_${country}`],
		},
		{
			id: 2,
			title: 'Choose a Setting',
			price: currency + productDetails[0].diamond?.[`total_cost_${country}`],
		},
		{
			id: 3,
			title: 'Complete a Ring',
			price: currency + productDetails[0].diamond?.[`total_cost_${country}`],
		},
	]

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col">
			<div className="w-[96%] border border-gray-300 mt-10 h-[100px] mx-auto flex">
				{steps.map(({ id, title, price }) => (
					<div
						key={id}
						className="w-1/3 h-full border-r border-gray-300 flex items-center justify-between p-4 last:border-r-0"
					>
						<div className="flex items-center">
							<span className="text-3xl mr-4">{id}</span>
							<span className="text-sm font-medium">{title}</span>
						</div>
						<div className="flex items-center space-x-2">
							<div className="flex flex-col items-center">
								{productDetails[0].diamond?.[`total_cost_${country}`] !==
									null && <span className="text-sm">{price}</span>}
								<div className="flex space-x-2">
									<button
										onClick={() => dispatch(setStep(id))}
										className="text-xs"
									>
										View
									</button>
									<button href="/" className="text-xs">
										Remove
									</button>
								</div>
							</div>
							<img src={Image} alt="something" className="h-20 w-20" />
						</div>
					</div>
				))}
			</div>
			<div className="container items-center p-6" style={{ maxWidth: '100%' }}>
				{step === 1 && <StepOne />}
				{step === 2 && <StepTwo />}
				{step === 3 && <StepThree />}
			</div>
		</div>
	)
}

export default CustomizeRing
