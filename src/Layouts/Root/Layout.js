import React from 'react';
import PropTypes from 'prop-types';

import { useTheme, useWheelScroll } from 'Hooks';

import GlobalStyles from 'GlobalStyles';
import { Container, Main } from './styles';
import Header from './Header';


/**
 * Layout component
 * @param {React.Node} children - children component
 * @returns {React.Node} - layout with header component
 */
const Layout = ({ children, routes }) => {
	useWheelScroll(routes);
	const { currentTheme } = useTheme();

	return (
		<>
			<GlobalStyles />
			<Container style={{ '--theme': currentTheme.color }}>
				<Header />
				<Main>{children}</Main>
			</Container>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
