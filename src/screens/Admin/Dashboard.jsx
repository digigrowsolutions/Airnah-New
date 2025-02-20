import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, fetchUsers } from '../../redux/userProductsSlice'

const AdminDashboard = () => {
	const dispatch = useDispatch()
	const { products, users } = useSelector((state) => state.userProducts)

	useEffect(() => {
		if (products.length === 0 && users.length === 0) {
			dispatch(fetchProducts())
			dispatch(fetchUsers())
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
					<div>
						<h2 className="text-xl font-semibold text-gray-700">
							Total Products
						</h2>
						<p className="text-3xl font-bold text-blue-600">
							{products?.length}
						</p>
					</div>
					<div className="text-blue-500 text-4xl">📦</div>
				</div>

				<div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
					<div>
						<h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
						<p className="text-3xl font-bold text-green-600">{users?.length}</p>
					</div>
					<div className="text-green-500 text-4xl">👤</div>
				</div>
			</div>
		</div>
	)
}

export default AdminDashboard
