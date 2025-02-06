import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from './store'

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</Provider>
	)
}

export default App
