import { compose, createStore } from 'redux';
import reducer from './reducers/index';


export const store = createStore(
	reducer,
	compose(
		window.devToolsExtension ? window.devToolsExtension() : (func) => func
	)
);