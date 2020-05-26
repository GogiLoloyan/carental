import { CHANGE_CURRENT_THEME } from '../actions/action_types'

const themes = {
	themes: {
		red: { color: '#ff0505' },
		blue: { color: '#6149e1' }
	},
	current_theme: { color: '#ff0505' }
}

const themeReducer = (state = themes, action) => {
	switch (action.type) {
		case CHANGE_CURRENT_THEME:
			return {
				...state,
				current_theme: action.payload
			}
		default:
			return state
	}
}

export default themeReducer
