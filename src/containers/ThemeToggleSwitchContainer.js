import React from 'react';
import { connect } from 'react-redux';
import ToggleSwitch from 'components/ToggleSwitch';
import { toggleTheme } from 'store/actions/theme';

function ThemeToggleSwitchContainer(props) {
	const { isDarkTheme, toggleTheme } = props;

	if (isDarkTheme) {
		document.body.classList.add('dark-theme');
	} else {
		document.body.classList.remove('dark-theme');
	}

	return (
		<ToggleSwitch identifier={"toggle-theme"} label={"Dark Theme"} checked={isDarkTheme} onChange={toggleTheme} />
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
