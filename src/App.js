import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import { useLooder } from './hooks/looder.hook'
import { useTheme } from './hooks/themeColor.hook'

import Loader from './LoadPage'
import Main from './components/main/Main'
import Header from './components/Layout/Header'

/*************************** */

import Home from './components/main/components/home/Home'
import Services from './components/main/components/services/Services'
import Vehicles from './components/main/components/vehicles/Vehicles'
import OurBenefits from './components/main/components/our-benefits/OurBenefits'
import Testimonials from './components/main/components/testimonials/Testimonials'
import Stations from './components/main/components/stations/Stations'
import ContactUS from './components/main/components/contact-us/ContactUS'

import { AnimatePresence } from 'framer-motion'

function App() {
	const { currentTheme } = useTheme()
	const loading = useLooder()

	const location = useLocation()

	return loading ? (
		<Loader />
	) : (
		<div className='app' style={{ '--theme': currentTheme.color }}>
			<Header />

			<AnimatePresence>
				<Switch location={location} key={location.pathname}>
					<Route path='/' component={Home} exact />
					<Route path='/services' component={Services} exact />
					<Route path='/vehicles' component={Vehicles} exact />
					<Route path='/our-benefits' component={OurBenefits} exact />
					<Route path='/testimonials' component={Testimonials} exact />
					<Route path='/stations' component={Stations} exact />
					<Route path='/contact-us' component={ContactUS} exact />
				</Switch>
			</AnimatePresence>
		</div>
	)
}

export default App
