import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom'

import Loader from './LoadPage';
import { useLooder } from './hooks/looder.hook'

import Home from './components/main/components/home/Home'
import Services from './components/main/components/services/Services'
import Vehicles from './components/main/components/vehicles/Vehicles'
import OurBenefits from './components/main/components/our-benefits/OurBenefits'
import Testimonials from './components/main/components/testimonials/Testimonials'
import Stations from './components/main/components/stations/Stations'
import ContactUS from './components/main/components/contact-us/ContactUS'

// root layout - with header
import HeaderLayout from './layouts/Header'
// main pages layout - with right and left navigation
import PageNavigationLayout from './layouts/PageNavigation'


/**
 * Routes Component
 * @returns {React.Node} - routes
 */
const Routes = () => {
	const loading = useLooder()
	const location = useLocation()

	if (loading) return <Loader />

	return (
		<HeaderLayout>
			<PageNavigationLayout>
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
			</PageNavigationLayout>
			{/* other routers */}
		</HeaderLayout>
	)
}

export default Routes
