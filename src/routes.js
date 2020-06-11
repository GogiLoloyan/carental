import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Switch, useLocation, useHistory } from 'react-router-dom'
import RouteWithLayout from './utils/routeWithLayout'

import Home from './components/main/components/home/Home'
import Services from './components/main/components/services/Services'
import Vehicles from './components/main/components/vehicles/Vehicles'
import OurBenefits from './components/main/components/our-benefits/OurBenefits'
import Testimonials from './components/main/components/testimonials/Testimonials'
import Stations from './components/main/components/stations/Stations'
import ContactUS from './components/main/components/contact-us/ContactUS'

/**
 * Routes Component
 * @returns {React.Node} - routes
 */
const Routes = () => {
	const location = useLocation()

	return (
		<AnimatePresence>
			<Switch location={location} key={location.pathname}>
				<RouteWithLayout path='/' component={Home} exact />
				<RouteWithLayout path='/services' component={Services} exact />
				<RouteWithLayout path='/vehicles' component={Vehicles} exact />
				<RouteWithLayout path='/our-benefits' component={OurBenefits} exact />
				<RouteWithLayout path='/testimonials' component={Testimonials} exact />
				<RouteWithLayout path='/stations' component={Stations} exact />
				<RouteWithLayout path='/contact-us' component={ContactUS} exact />
			</Switch>
		</AnimatePresence>
	)
}

export default Routes
