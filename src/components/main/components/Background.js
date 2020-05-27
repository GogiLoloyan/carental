import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Switch, Route, useLocation } from 'react-router-dom'

import HomeBackground from '../../backgrounds/HomeBackground'
import OpacityMotion from '../../../motion/layouts/OpacityMotion'
import ServicesBackground from '../../backgrounds/ServicesBackground'

const Background = () => {
	const location = useLocation()
	const components = [
		{ Component: HomeBackground, path: '/' },
		{ Component: ServicesBackground, path: '/services' }
	]

	return (
		<AnimatePresence>
			<Switch location={location} key={location.pathname}>
				{components.map(({ Component, path }) => (
					<Route exact path={path} key={path}>
						{() => (
							<OpacityMotion>
								<Component />
							</OpacityMotion>
						)}
					</Route>
				))}
			</Switch>
		</AnimatePresence>
	)
}

export default Background
