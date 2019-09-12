import initialState from '../initialState';
import { TOGGLE_THEME } from '../actions/actions';

function themeReducer(darkTheme = initialState.darkTheme, action) {
	switch(action.type) {
		case TOGGLE_THEME:
			return !darkTheme;
		default:
			return darkTheme;
	};
}

export default themeReducer;
