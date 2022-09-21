import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import appVars from './reducers/appVars';

const storeDebug = false;

export default configureStore({
	reducer: {
		appVars,
	},
	devTools: storeDebug,
	middleware: getDefaultMiddleware => storeDebug ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware()
});
