import initialState from 'store/initialState';
import { TOGGLE_NSFW } from 'store/actions/nsfw';

function nsfwReducer(nsfwEnabled = initialState.nsfwEnabled, action) {
	switch(action.type) {
		case TOGGLE_NSFW:
			return !nsfwEnabled;
		default:
			return nsfwEnabled;
	};
}

export default nsfwReducer;
