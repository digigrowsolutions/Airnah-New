import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from './store'
import CustomizeRing from './screens/CustomizeRing'
import Favorites from './screens/Favorites'
import Cart from './screens/Cart'
import React from 'react'
import ProductGrid from './screens/ProductGrid'
import ProductsList from './screens/Admin/ProductsList'
import Product from './components/Product'
import AddProduct from './screens/Admin/AddProduct'
import AdminDashboard from './screens/Admin/Dashboard'
import UsersList from './screens/Admin/UsersList'
import Master from './screens/Admin/Master'

function App() {
	return (
		<Provider store={store}>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/customize" element={<CustomizeRing />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/Product" element={<ProductGrid />} />
				<Route path="/dashboard" element={<AdminDashboard />} />
				<Route path="/addProducts" element={<AddProduct />} />
				<Route path="/productsList" element={<ProductsList />} />
				<Route path="/userList" element={<UsersList />} />
				<Route path="/master" element={<Master />} />
				<Route path="/products/:id" element={<Product />} />
			</Routes>
			<Footer />
		</Provider>
	)
}

export default App
