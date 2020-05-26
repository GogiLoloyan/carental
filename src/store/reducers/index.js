import { combineReducers } from 'redux'
import themesReducer from './themes_reducer'
import routesReducer from './routes_reducer'

export default combineReducers({
	themes: themesReducer,
	routes: routesReducer
})
