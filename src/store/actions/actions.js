import { CHANGE_CURRENT_THEME } from './actionTypes'
import { CHANGE_CURRENT_PATH } from './actionTypes'

export const changeCurrentTheme = theme => ({
	type: CHANGE_CURRENT_THEME,
	payload: theme
})

export const changeCurrentPath = path => ({
	type: CHANGE_CURRENT_PATH,
	payload: path
})
