import { combineReducers } from 'redux';
import nsfwReducer from './nsfwReducer';
import themeReducer from './themeReducer';

const reducers = combineReducers({
	nsfwEnabled: nsfwReducer,
	darkTheme: themeReducer
});

export default reducers;
