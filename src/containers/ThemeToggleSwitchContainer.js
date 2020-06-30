import React from 'react';
import { connect } from 'react-redux';
import textStrings from 'config/textStrings';
import ToggleSwitch from 'components/ToggleSwitch/ToggleSwitch';
import { toggleTheme } from 'store/actions/theme';

function ThemeToggleSwitchContainer(props) {
	const { isDarkTheme, toggleTheme } = props;

	if (isDarkTheme) {
		document.body.classList.add('dark-theme');
	} else {
		document.body.classList.remove('dark-theme');
	}

	return (
		<ToggleSwitch identifier={"toggle-theme"} label={textStrings.labelDarkTheme} checked={isDarkTheme} onChange={toggleTheme} />
	);
}

function mapStateToProps(state) {
	return {
		isDarkTheme: state.isDarkTheme
	};
}

function mapDispatchToProps(dispatch) {
	return {
		toggleTheme: () => dispatch(toggleTheme())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggleSwitchContainer);
