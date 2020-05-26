import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Switch, Route, useLocation } from 'react-router-dom'

import HomeBackground from '../../backgrounds/HomeBackground'
import ServicesBackground from '../../backgrounds/ServicesBackground'
import { variants, transition } from '../../../motion/concret/background'

const Background = () => {
	const location = useLocation()
	const components = [
		{ Component: HomeBackground, path: '/' },
		{ Component: ServicesBackground, path: '/services' }
	]

	return (
		<AnimatePresence>
			<Switch location={location} key={location.pathname}>
				{components.map(({ Component, path }, i) => (
					<Route exact path={path}>
						{() => (
							<MotionWrapper>
								<Component />
							</MotionWrapper>
						)}	
					</Route>
				))}
			</Switch>
		</AnimatePresence>
	)
}

const MotionWrapper = ({ children }) => (
	<motion.div
		initial='initial'
		animate='enter'
		exit='exit'
		variants={variants}
		transition={transition}
		className='bg-wrapper'
	>
		{children}
	</motion.div>
)

export default Background
