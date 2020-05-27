import { CHANGE_CURRENT_THEME } from '../actions/actionTypes'

const themes = {
	themes: {
		red: { color: '#ff0505' },
		blue: { color: '#6149e1' }
	},
	currentTheme: { color: '#ff0505' }
}

const themeReducer = (state = themes, action) => {
	switch (action.type) {
		case CHANGE_CURRENT_THEME:
			return {
				...state,
				currentTheme: action.payload
			}
		default:
			return state
	}
}

export default themeReducer
