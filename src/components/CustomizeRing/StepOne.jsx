import { useDispatch, useSelector } from 'react-redux'
import { setShowProduct } from '../../redux/ringCustomizationSlice'
import ProductGrid from '../ProductGrid'
import Product from '../../screens/Product'

const StepOne = () => {
	const dispatch = useDispatch()
	const { showProduct } = useSelector((state) => state.ringCustomization)

	return (
		<div className="flex flex-col items-center gap-2 p-2 min-h-screen text-black">
			{showProduct ? (
				<>
					<button
						className="justify-start w-full flex ms-20"
						onClick={() => dispatch(setShowProduct(false))}
					>
						{'< '}
						Go back to products
					</button>
					<Product />
				</>
			) : (
				<>
					<ProductGrid />
				</>
			)}
		</div>
	)
}

export default StepOne
