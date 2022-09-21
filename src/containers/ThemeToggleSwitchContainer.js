import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setIsDarkTheme } from 'store/reducers/appVars';
import ToggleSwitch from 'components/ToggleSwitch/ToggleSwitch';

function ThemeToggleSwitchContainer() {
	const dispatch = useDispatch();
	const { isDarkTheme } = useSelector((state) => state.appVars);

	const handleToggleChange = () => {
		dispatch(setIsDarkTheme(!isDarkTheme));
	};

	return (
		<ToggleSwitch identifier={'toggle-theme'} label={'Night Mode'} isChecked={isDarkTheme} handleChange={handleToggleChange} />
	);
}

export default ThemeToggleSwitchContainer;
