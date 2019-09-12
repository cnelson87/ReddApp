import { createStore } from 'redux';
import initialState from './initialState';
import reducers from './reducers/reducers';

export default createStore(
	reducers,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
