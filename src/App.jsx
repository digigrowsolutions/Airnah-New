import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from './store'
import CustomizeRing from './screens/CustomizeRing'
import Favorites from './screens/Favorites'
import Cart from './screens/Cart'
import React from "react";
import Product from './screens/ProductGrid'



function App() {
	return (
		<Provider store={store}>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/customize" element={<CustomizeRing />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/Product" element={<Product />} />

			</Routes>
			<Footer />
		</Provider>
	)
}

export default App
