import React, { useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Nav = () => {
	const {
		routes,
		themes: { themes }
	} = useSelector(store => store)
	
	const mainPaths = Object.values(routes.mainPaths).slice(1, -1)

	const getTheme = useCallback(
		themeName => {
			const color = themes[themeName].color
			return { '--theme': color }
		},
		[themes]
	)

	return (
		<ul className='nav'>
			{mainPaths.map(({ path, themeName }) => (
				<li style={getTheme(themeName)} key={path}>
					<NavLink to={path} activeClassName='active'>
						<span tabIndex='-1'>{path.replace(/-/g, ' ')}</span>
					</NavLink>
				</li>
			))}
		</ul>
	)
}

export default Nav
