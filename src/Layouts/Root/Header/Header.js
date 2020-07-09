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
	Menu,
	StyledNavLink,
	P,
	// components Hamburger
	Hamburger,
	Bar
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
				<Letters>
					ca
					<DesignedLetter>r</DesignedLetter>
					ental
				</Letters>
			</LogoLink>
			<Menu>
				{tabs.map(({ tab, theme }) => (
					<Menu.Item key={tab} theme={themes[theme]}>
						<StyledNavLink to={tab}>
							<P>{tab.replace(/-/i, ' ')}</P>
						</StyledNavLink>
					</Menu.Item>
				))}
			</Menu>
			<Hamburger.Wrapper>
				<Hamburger>
					<Bar top />
					<Bar />
				</Hamburger>
			</Hamburger.Wrapper>
		</Nav>
	);
};

Header.propTypes = {
	themes: PropTypes.object.isRequired
};

export default Header;
