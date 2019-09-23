
export const TOGGLE_NSFW = 'TOGGLE_NSFW';
export const TOGGLE_THEME = 'TOGGLE_THEME';

export function toggleNSFW() {
	return { type: TOGGLE_NSFW };
}

export function toggleTheme() {
	return { type: TOGGLE_THEME };
}
