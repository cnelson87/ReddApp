import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isMenuOpen: false,
	nsfwEnabled: false,
	isDarkTheme: false,
};

export const appVars = createSlice({
	name: 'appVars',
	initialState: initialState,
	reducers: {
		setIsMenuOpen: (state, action) => {
			state.isMenuOpen = action.payload;
		},
		setNsfwEnabled: (state, action) => {
			state.nsfwEnabled = action.payload;
		},
		setIsDarkTheme: (state, action) => {
			state.isDarkTheme = action.payload;
		},
	},
});

export const {
	setIsMenuOpen,
	setNsfwEnabled,
	setIsDarkTheme,
} = appVars.actions;

export default appVars.reducer;
