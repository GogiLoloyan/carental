import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { useLooder } from './hooks/looder.hook'
import { useTheme } from './hooks/themeColor.hook'

import Loader from './LoadPage'
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'

function App() {
	useTheme()
	const loading = useLooder()
	const theme = useSelector(store => store.themes.current_theme)

	return loading ? (
		<Loader />
	) : (
		<div className='app' style={{ '--theme': theme.color }}>
			<Navbar />
			<Switch>
				{/* <Route exact path='/services/loose-cars' component={LooseCars} />
				<Route exact path='/services/auto-parts' component={AutoParts} />
				<Route exact path='/partners' component={Partners} /> */}

				<Route path='/' component={Main} />
			</Switch>
		</div>
	)
}

export default App
