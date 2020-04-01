import initialState from 'store/initialState';
import { TOGGLE_THEME } from 'store/actions/actions';

function themeReducer(darkTheme = initialState.darkTheme, action) {
	switch(action.type) {
		case TOGGLE_THEME:
			return !darkTheme;
		default:
			return darkTheme;
	};
}

export default themeReducer;
