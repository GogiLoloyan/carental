import React from 'react'
import { useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom'

import Home from './home/Home'
import Services from './services/Services'
import Vehicles from './vehicles/Vehicles'
import Stations from './stations/Stations'
import ContactUS from './contact-us/ContactUS'
import OurBenefits from './our-benefits/OurBenefits'
import Testimonials from './testimonials/Testimonials'

import MotionLayout from '../../layouts/MotionLayout'

function MainPageContent() {
	const location = useLocation()
	const mainPaths = useSelector(store => store.routes.main_paths)

	const components = [
		Home,
		Services,
		Vehicles,
		OurBenefits,
		Testimonials,
		Stations,
		ContactUS
	]

	return (
		<AnimatePresence>
			<Switch location={location} key={location.pathname}>
				{mainPaths.map(({ path, id }, i) => (
					<Route exact key={id} path={`/${path}`}>
						{() => <MotionLayout>{components[i]}</MotionLayout>}
					</Route>
				))}
			</Switch>
		</AnimatePresence>
	)
}

export default MainPageContent
