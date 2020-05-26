import { CHANGE_CURRENT_THEME } from './action_types'
import { CHANGE_CURRENT_PATH } from './action_types'

export const changeCurrentTheme = theme => ({
	type: CHANGE_CURRENT_THEME,
	payload: theme
})

export const changeCurrentPath = path => ({
	type: CHANGE_CURRENT_PATH,
	payload: path
})
