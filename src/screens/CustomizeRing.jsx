import { useSelector } from 'react-redux'
import StepOne from '../components/CustomizeRing/StepOne'
import StepTwo from '../components/CustomizeRing/StepTwo'
import StepThree from '../components/CustomizeRing/StepThree'
import Image from '../assets/ring4.jpg'

const CustomizeRing = () => {
	const step = useSelector((state) => state.ringCustomization.step)

	const steps = [
		{ id: 1, title: 'Choose a Diamond', price: '$2,500' },
		{ id: 2, title: 'Choose a Setting', price: '$1,500' },
		{ id: 3, title: 'Complete a Ring', price: '$4,000' },
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
								<span className="text-sm">{price}</span>
								<div className="flex space-x-2">
									<a href="#" className="text-xs">
										View
									</a>
									<a href="#" className="text-xs">
										Remove
									</a>
								</div>
							</div>
							<img src={Image} className="h-20 w-20" />
						</div>
					</div>
				))}
			</div>
			<div className="container mx-auto px-6 py-12">
				{step === 1 && <StepOne />}
				{step === 2 && <StepTwo />}
				{step === 3 && <StepThree />}
			</div>
		</div>
	)
}

export default CustomizeRing
