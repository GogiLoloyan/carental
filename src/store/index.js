import { createStore } from 'redux'
import reduser from './reducers'

export function configureStore() {
	const store = createStore(reduser)
	// store.subscribe(() => console.log(store.getState()))
	return store
}
