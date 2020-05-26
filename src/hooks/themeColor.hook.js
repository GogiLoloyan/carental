import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { changeCurrentPath, changeCurrentTheme } from '../store/actions/actions'

export const useTheme = () => {
	const location = useLocation()
	const dispatch = useDispatch()
	const { routes, themes } = useSelector(store => store)

	useEffect(() => {
		const currentPathName = location.pathname.slice(1)
		const path = routes.main_paths.find(({ path }) => path === currentPathName)
		const theme = themes.themes[path.theme_name]

		dispatch(changeCurrentPath(path))
		dispatch(changeCurrentTheme(theme))
	}, [location])
}
