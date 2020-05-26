import React from 'react'
import Logo from './Logo'
import MenuHamburger from './MenuHamburger'
import Nav from './Nav'

function Navbar(props) {
	return (
		<nav className='navbar' role='navigation'>
			<Logo />
			<Nav />
			<MenuHamburger />
		</nav>
	)
}

export default Navbar
