import { CHANGE_CURRENT_PATH } from '../actions/actionTypes'

const routes = {
	mainPaths: [
		{ id: 1, path: '', name: 'Home', themeName: 'red' },
		{ id: 2, path: 'services', name: 'Services', themeName: 'blue' },
		{ id: 3, path: 'vehicles', name: 'Vehicles', themeName: 'red' },
		{ id: 4, path: 'our-benefits', name: 'OurBenefits', themeName: 'blue' },
		{ id: 5, path: 'testimonials', name: 'Testimonials', themeName: 'red' },
		{ id: 6, path: 'stations', name: 'Stations', themeName: 'blue' },
		{ id: 7, path: 'contact-us', name: 'ContactUs', themeName: 'red' }
	],

	currentPath: { id: 1, path: '', themeName: 'red' }
}

const routesReducer = (state = routes, action) => {
	switch (action.type) {
		case CHANGE_CURRENT_PATH:
			return {
				...state,
				currentPath: state.mainPaths[action.payload - 1]
			}
		default:
			return state
	}
}

export default routesReducer
