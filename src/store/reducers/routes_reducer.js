import { CHANGE_CURRENT_PATH } from '../actions/action_types'

const routes = {
	main_paths: [
		{ id: 1, path: '', component: 'Home', theme_name: 'red' },
		{ id: 2, path: 'services', component: 'Services', theme_name: 'blue' },
		{ id: 3, path: 'vehicles', component: 'Vehicles', theme_name: 'red' },
		{ id: 4, path: 'our-benefits', component: 'OurBenefits', theme_name: 'blue' },
		{ id: 5, path: 'testimonials', component: 'Testimonials', theme_name: 'red' },
		{ id: 6, path: 'stations', component: 'Stations', theme_name: 'blue' },
		{ id: 7, path: 'contact-us', component: 'ContactUs', theme_name: 'red' }
	],
	current_path: { id: 1, path: '', theme_name: 'red' }
}

const routesReducer = (state = routes, action) => {
	switch (action.type) {
		case CHANGE_CURRENT_PATH:
			return {
				...state,
				current_path: action.payload
			}
		default:
			return state
	}
}

export default routesReducer
