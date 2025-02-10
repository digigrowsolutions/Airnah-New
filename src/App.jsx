import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from './store'
import CustomizeRing from './screens/CustomizeRing'
import Favorites from './screens/Favorites'
import Cart from './screens/Cart'

function App() {
	return (
		<Provider store={store}>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/customize" element={<CustomizeRing />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
			<Footer />
		</Provider>
	)
}

export default App
