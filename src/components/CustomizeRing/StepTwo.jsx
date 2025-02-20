import { useDispatch, useSelector } from 'react-redux'
import { setShowRing } from '../../redux/ringCustomizationSlice'
import Product2 from '../Product2'
import RingGrid from '../RingGrid'

const StepTwo = () => {
	const dispatch = useDispatch()
	const { showRing } = useSelector((state) => state.ringCustomization)

	return (
		<div className="flex flex-col items-center gap-2 p-2 min-h-screen text-black">
			{showRing ? (
				<>
					<button
						className="justify-start w-full flex ms-20"
						onClick={() => dispatch(setShowRing(false))}
					>
						{'< '}
						Go back to rings
					</button>
					<Product2 />
				</>
			) : (
				<>
					<RingGrid />
				</>
			)}
		</div>
	)
}

export default StepTwo
