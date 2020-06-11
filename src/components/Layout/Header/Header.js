import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
  
const Header = ({ themes }) => {
	/**
	 * Get theme color
	 * @param {String} themeName - color name
	 * @returns {Object} theme color as css style
	 */
	const getTheme = themeName => {
		const color = themes[themeName].color
		return { '--theme': color }
	}

	const tabs = [
		{ tab: 'services', theme: 'blue' },
		{ tab: 'vehicles', theme: 'red' },
		{ tab: 'our-benefits', theme: 'blue' },
		{ tab: 'testimonials', theme: 'red' },
		{ tab: 'stations', theme: 'blue' }
	]

	return (
		<nav className='navbar' role='navigation'>
			<NavLink to='/' className='logo' tabIndex='0'>
				<span tabIndex='-1'>
					ca<span className='design-letter'>r</span>ental
				</span>
			</NavLink>
			<ul className='nav'>
				{tabs.map(({ tab, theme }) => (
					<li key={tab} style={getTheme(theme)}>
						<NavLink to={tab} activeClassName='active'>
							<span tabIndex='-1'>{tab}</span>
						</NavLink>
					</li>
				))}
			</ul>
			<div className='menu-hamburger' tabIndex='0' role='button'>
				<div tabIndex='-1'>
					<span />
					<span />
				</div>
			</div>
		</nav>
	)
}

Header.propTypes = {
	themes: PropTypes.object.isRequired
}

export default Header
