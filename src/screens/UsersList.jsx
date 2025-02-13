import { useSelector } from 'react-redux'

const UsersList = () => {
	const { users } = useSelector((state) => state.userProducts)

	return (
		<div className="max-w-6xl mx-auto p-8">
			<h2 className="text-2xl font-bold mb-4">Users List</h2>
			<table className="min-w-full bg-white border border-gray-200">
				<thead>
					<tr className="bg-gray-100">
						<th className="border px-4 py-2">Name</th>
						<th className="border px-4 py-2">Email</th>
						<th className="border px-4 py-2">Role</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user?.user_id} className="border">
							<td className="border px-4 py-2">{user?.name}</td>
							<td className="border px-4 py-2">{user?.email}</td>
							<td className="border px-4 py-2">{user?.role}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default UsersList
