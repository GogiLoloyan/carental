import { combineReducers } from 'redux'
import themesReducer from './themesReducer'
import routesReducer from './routesReducer'

export default combineReducers({
	themes: themesReducer,
	routes: routesReducer
})
