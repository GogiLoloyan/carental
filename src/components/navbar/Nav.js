import React, { useEffect, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Nav = () => {
    const { routes, themes: {themes} } = useSelector(store => store)
    const mainPaths = routes.main_paths.slice(1, -1)
    
	const getTheme = useCallback(
		theme_name => {
			const color = themes[theme_name].color
			return { '--theme': color }
		},
		[themes]
	)

	return (
		<ul className='nav'>
			{mainPaths.map(({ path, theme_name }, i) => (
				<li style={getTheme(theme_name)} key={i}>
					<NavLink to={path} activeClassName='active'>
						<span tabIndex='-1'>{path.replace(/-/g, ' ')}</span>
					</NavLink>
				</li>
			))}
		</ul>
	)
}

export default Nav
