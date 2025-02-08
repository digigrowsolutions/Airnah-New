import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from './store'
import CustomizeRing from './screens/CustomizeRing'

function App() {
	return (
		<Provider store={store}>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/customize" element={<CustomizeRing />} />
			</Routes>
			<Footer />
		</Provider>
	)
}

export default App
