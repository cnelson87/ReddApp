import React from 'react';
import { connect } from 'react-redux';
import ToggleSwitch from '../components/ToggleSwitch';
import { TOGGLE_THEME } from '../store/actions/actions';

class ThemeToggleSwitchContainer extends React.Component {

	render() {
		const { darkTheme, toggleTheme } = this.props;

		if (darkTheme) {
			document.body.classList.add('dark-theme');
		} else {
			document.body.classList.remove('dark-theme');
		}

		return (
			<ToggleSwitch label={"Dark Theme"} name={"toggle-theme"} checked={darkTheme} onChange={toggleTheme} />
		);
	}
}

function mapStateToProps(state) {
	return {
		darkTheme: state.darkTheme
	};
}

function mapDispatchToProps(dispatch) {
	return {
		toggleTheme: () => dispatch({ type: TOGGLE_THEME })
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggleSwitchContainer);
