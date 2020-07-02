import initialState from 'store/initialState';
import { TOGGLE_MENU } from 'store/actions/menu';

function menuReducer(menuOpen = initialState.menuOpen, action) {
	switch(action.type) {
		case TOGGLE_MENU:
			return !menuOpen;
		default:
			return menuOpen;
	};
}

export default menuReducer;
