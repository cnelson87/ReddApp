import initialState from 'store/initialState';
import { TOGGLE_THEME } from 'store/actions/actions';

function themeReducer(isDarkTheme = initialState.isDarkTheme, action) {
	switch(action.type) {
		case TOGGLE_THEME:
			return !isDarkTheme;
		default:
			return isDarkTheme;
	};
}

export default themeReducer;
