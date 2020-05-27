import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './App.scss'

const store = configureStore()

const Root = () => {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</React.StrictMode>
	)
}

export default Root
