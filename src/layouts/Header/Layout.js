import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'

import { useTheme } from '../../hooks/themeColor.hook'
import { useWheelScroll } from '../../hooks/wheelScroll.hook'


/**
 * Layout component
 * @param {React.Node} children - children component
 * @returns {React.Node} - layout component
 */
const Layout = ({ children, routes }) => {
	const { currentTheme } = useTheme()
	useWheelScroll(routes)

	return (
		<div className='app' style={{ '--theme': currentTheme.color }}>
			<Header />
			<section className='main-page'>
				{children}
			</section>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
}

export default Layout
