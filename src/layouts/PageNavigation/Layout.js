import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import LeftNav from './LeftNav'
import RightNav from './RightNav'


/**
 * Layout component
 * @param {React.Node} children - children component
 * @returns {React.Node} - layout component
 */
const Layout = ({ children }) => {
	return (
		<Fragment>
			<LeftNav /> {children} <RightNav />
		</Fragment>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
}

export default Layout
