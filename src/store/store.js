import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import initialState from './initialState';
import reducers from './reducers/reducers';

const storeArgs = [ reducers, initialState ];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger({
	collapsed: true
});

if (process.env.NODE_ENV === 'development') {
	storeArgs.push( composeEnhancers(applyMiddleware(logger)) );
}

export default createStore(...storeArgs);
