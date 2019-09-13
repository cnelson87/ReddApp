import React from 'react';
import { connect } from 'react-redux';
import ToggleSwitch from '../components/ToggleSwitch';

class ToggleTheme extends React.Component {

	onChange = () => {
		console.log('ToggleTheme:onChange');
	}

	// onChange = this.onChange.bind(this);

	render() {
		const { darkTheme } = this.props;

		return (
			<ToggleSwitch label={"Dark Theme"} name={"toggle-theme"} checked={darkTheme} onChange={this.onChange} />
		);
	}
}

const mapStateToProps = (state) => ({
	darkTheme: state.darkTheme
})

export default connect(mapStateToProps)(ToggleTheme);
