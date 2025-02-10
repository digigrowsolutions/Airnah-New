import { useSelector } from 'react-redux'
import StepOne from '../components/CustomizeRing/StepOne'
import StepTwo from '../components/CustomizeRing/StepTwo'
import StepThree from '../components/CustomizeRing/StepThree'
import Image from '../assets/ring4.jpg'

const CustomizeRing = () => {
	const step = useSelector((state) => state.ringCustomization.step)

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col">
			{/* Steps Navigation */}

			<div className="w-[96%] border border-gray-300 mt-10 h-[100px] mx-auto flex">
      {/* Box 1 */}
      <div className="w-1/3 h-full border-r border-gray-300 flex items-center justify-between p-4">
        <div className="flex items-center">
          <span className="text-3xl mr-4">1</span>
          <span className="text-sm font-medium">Choose a Diamond</span>
        </div>
        <img src= {Image} className="h-20 w-20" />
      </div>

      {/* Box 2 */}
      <div className="w-1/3 h-full border-r border-gray-300 flex items-center justify-between p-4">
        <div className="flex items-center">
          <span className="text-3xl mr-4">2</span>
          <span className="text-sm font-medium">Choose a Setting</span>
        </div>
        <img src= {Image} className="h-20 w-20" />
      </div>

      {/* Box 3 */}
      <div className="w-1/3 h-full flex items-center justify-between p-4">
        <div className="flex items-center">
          <span className="text-3xl mr-4">3</span>
          <span className="text-sm font-medium">Complete a Ring</span>
        </div>
        <img src= {Image} className="h-20 w-20" />
      </div>
    </div>


			<div className="w-full bg-gray-200 py-6">
				<div className="max-w-6xl mx-auto flex justify-left space-x-16">
					{['Step 1', 'Step 2', 'Step 3'].map((label, index) => (
						<div
							key={index}
							className={`relative text-lg transition-all cursor-pointer ${step === index + 1
								? 'text-blue-600 font-semibold border-b-4 border-blue-500'
								: 'text-gray-600 border-b-4 border-transparent'
								}`}
						>
							{label}
						</div>
					))}
				</div>
			</div>

			{/* Step Content */}
			<div className="flex-1 flex justify-center items-start max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
				{step === 1 && <StepOne />}
				{step === 2 && <StepTwo />}
				{step === 3 && <StepThree />}
			</div>




		</div>
	)
}

export default CustomizeRing

