import React from 'react';
import PropTypes from 'prop-types';
import {
	// components Nav
	Nav,
	// components Logo
	LogoLink,
	Letters,
	DesignedLetter,
	// components Menu List
	MenuList,
	MenuItem,
	StyledNavLink,
	Text,
	// components Menu Hamburger
	MenuHamburger,
	Bar,
	KeyboardOnlyFocus
} from './components';


/**
 * Header component
 * @param {Object} props - props
 * @returns {React.Node} - header component
 */
const Header = ({ themes }) => {
	const tabs = [
		{ tab: 'services', theme: 'blue' },
		{ tab: 'vehicles', theme: 'red' },
		{ tab: 'our-benefits', theme: 'blue' },
		{ tab: 'testimonials', theme: 'red' },
		{ tab: 'stations', theme: 'blue' }
	];

	return (
		<Nav>
			<LogoLink to="/">
				<Letters tabIndex="-1">
					ca
					<DesignedLetter>r</DesignedLetter>
					ental
				</Letters>
			</LogoLink>
			<MenuList>
				{tabs.map(({ tab, theme }) => (
					<MenuItem key={tab} theme={themes[theme]}>
						<StyledNavLink to={tab} activeClassName="active">
							<Text tabIndex="-1">{tab}</Text>
						</StyledNavLink>
					</MenuItem>
				))}
			</MenuList>
			<KeyboardOnlyFocus tabIndex="0">
				<MenuHamburger tabIndex="-1">
					<Bar top />
					<Bar />
				</MenuHamburger>
			</KeyboardOnlyFocus>
		</Nav>
	);
};

Header.propTypes = {
	themes: PropTypes.object.isRequired
};

export default Header;
