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
    <div className="flex items-center space-x-2">
      <div className="flex flex-col items-center">
        <span className="text-sm">$2,500</span>
        <div className="flex space-x-2">
          <a href="#" className=" text-xs">View</a>
          <a href="#" className=" text-xs">Remove</a>
        </div>
      </div>
      <img src={Image} className="h-20 w-20" />
    </div>
  </div>

  {/* Box 2 */}
  <div className="w-1/3 h-full border-r border-gray-300 flex items-center justify-between p-4">
    <div className="flex items-center">
      <span className="text-3xl mr-4">2</span>
      <span className="text-sm font-medium">Choose a Setting</span>
    </div>
    <div className="flex items-center space-x-2">
      <div className="flex flex-col items-center">
        <span className="text-sm">$1,500</span>
        <div className="flex space-x-2">
          <a href="#" className=" text-xs">View</a>
          <a href="#" className=" text-xs">Remove</a>
        </div>
      </div>
      <img src={Image} className="h-20 w-20" />
    </div>
  </div>

  {/* Box 3 */}
  <div className="w-1/3 h-full flex items-center justify-between p-4">
    <div className="flex items-center">
      <span className="text-3xl mr-4">3</span>
      <span className="text-sm font-medium">Complete a Ring</span>
    </div>
    <div className="flex items-center space-x-2">
      <div className="flex flex-col items-start">
        <span className="text-sm">$4,000</span>
        <div className="flex space-x-2">
          <a href="#" className=" text-xs">View</a>
          <a href="#" className=" text-xs">Remove</a>
        </div>
      </div>
      <img src={Image} className="h-20 w-20" />
    </div>
  </div>
</div>



{/* Step Content 
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

			
			<div className="flex-1 flex justify-center items-start max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
				{step === 1 && <StepOne />}
				{step === 2 && <StepTwo />}
				{step === 3 && <StepThree />}
			</div>
*/}
  <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Image Grid */}
        <div className="w-full md:w-3/5 grid grid-cols-2 gap-4">
          <img
          src={Image}
            alt="Ring 1"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
           src={Image}
            alt="Ring 2"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
          src={Image}
            alt="Ring 3"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
           src={Image}
            alt="Ring 4"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-2/5 space-y-4">
          <h2 className="text-2xl font-semibold">Solitaire Engagement Ring</h2>
          <p className="text-gray-600">
            Embellished With a Four Prong Signature Head
          </p>
          <div className="flex items-center space-x-1 text-yellow-500 text-lg">
            <span>☆</span> <span>☆</span> <span>☆</span> <span>☆</span>{" "}
            <span>☆</span>
            <span className="text-gray-600 ml-2">(123)</span>
          </div>
          <div className="text-xl font-bold text-gray-900">$870</div>
          <div className="text-lg text-red-500 font-semibold">$435</div>
          <p className="text-sm text-gray-500">(Setting Price)</p>
          <div className="border-t pt-4 space-y-2 text-gray-700">
            <p>
              <strong>Flexible Payment Options:</strong> Buy now pay later with{" "}
              <span className="text-blue-500 cursor-pointer">Klarna</span>{" "}
              <span className="text-sm text-gray-500">Learn More</span>
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
              Select This Setting
            </button>
          </div>
          <div className="text-sm text-gray-600">
            <p>
              <strong>Real-Time Ring Inspection</strong>
            </p>
            <p>
              <strong>Ships by:</strong> Friday, February 28
            </p>
          </div>
          <div className="text-sm text-gray-700 border-t pt-4">
            <p className="font-semibold">Risk-Free Retail</p>
            <p>✔ Free 2-Day Shipping, Hassle-Free Returns</p>
          </div>
        </div>
      </div>
    </div>



		</div>
	)
}

export default CustomizeRing

