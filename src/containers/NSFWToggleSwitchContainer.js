import React from 'react';
import { connect } from 'react-redux';
import ToggleSwitch from '../components/ToggleSwitch';
import { TOGGLE_NSFW } from '../store/actions/actions';

class NSFWToggleSwitchContainer extends React.Component {

	render() {
		const { nsfwEnabled, toggleNSFW } = this.props;

		return (
			<ToggleSwitch label={"Show NSFW"} name={"toggle-nsfw"} checked={nsfwEnabled} onChange={toggleNSFW} />
		);
	}
}

function mapStateToProps(state) {
	return {
		nsfwEnabled: state.nsfwEnabled
	};
}

function mapDispatchToProps(dispatch) {
	return {
		toggleNSFW: () => dispatch({ type: TOGGLE_NSFW })
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(NSFWToggleSwitchContainer);
