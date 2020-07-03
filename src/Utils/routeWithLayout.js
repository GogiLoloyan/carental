import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PageNavigation as Layout } from 'Layouts';


/**
 * Layout route
 * @param {Object} props - props
 * @returns {React.Node} - route with layout
 */
const RouteWithLayout = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => (
			<Layout>
				<Component {...props} />
			</Layout>
		)}
	/>
);

RouteWithLayout.propTypes = {
	component: PropTypes.node.isRequired
};

export default RouteWithLayout;
