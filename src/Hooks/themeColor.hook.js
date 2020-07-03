import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { changeCurrentPath, changeCurrentTheme } from 'Store/actions/actions'


export const useTheme = () => {
	const location = useLocation()
	const dispatch = useDispatch()
	const {
		routes: { mainPaths },
		themes: { themes, currentTheme }
	} = useSelector(store => store)

	useEffect(() => {
		const currentPathName = location.pathname.slice(1)

		const { themeName, id } = mainPaths.find(
			({ path }) => path === currentPathName
		)
		const theme = themes[themeName]

		dispatch(changeCurrentTheme(theme))
		dispatch(changeCurrentPath(id))
	}, [location])

	return { currentTheme }
}
