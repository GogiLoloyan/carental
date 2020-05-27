import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom'

import Home from './home/Home'
import Services from './services/Services'
import Vehicles from './vehicles/Vehicles'
import Stations from './stations/Stations'
import ContactUS from './contact-us/ContactUS'
import OurBenefits from './our-benefits/OurBenefits'
import Testimonials from './testimonials/Testimonials'

function MainPageContent() {
	const location = useLocation()
	
	const pages = [
		{ page: Home, path: '/' },
		{ page: Services, path: '/services' },
		{ page: Vehicles, path: '/vehicles' },
		{ page: OurBenefits, path: '/our-benefits' },
		{ page: Testimonials, path: '/testimonials' },
		{ page: Stations, path: '/stations' },
		{ page: ContactUS, path: '/contact-us' }
	]

	return (
		<AnimatePresence>
			<Switch location={location} key={location.pathname}>
				{pages.map(({ path, page }) => (
					<Route exact path={path} key={path} component={page} />
				))}
			</Switch>
		</AnimatePresence>
	)
}

export default MainPageContent
