import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import nsfwReducer from './nsfwReducer';
import themeReducer from './themeReducer';

const reducers = combineReducers({
	menuOpen: menuReducer,
	nsfwEnabled: nsfwReducer,
	isDarkTheme: themeReducer
});

export default reducers;
