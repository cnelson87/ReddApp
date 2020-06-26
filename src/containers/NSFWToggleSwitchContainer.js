import React from 'react';
import { connect } from 'react-redux';
import ToggleSwitch from 'components/ToggleSwitch';
import { toggleNSFW } from 'store/actions/nsfw';

function NSFWToggleSwitchContainer(props) {
	const { nsfwEnabled, toggleNSFW } = props;

	return (
		<ToggleSwitch identifier={"toggle-nsfw"} label={"Show NSFW"} checked={nsfwEnabled} onChange={toggleNSFW} />
	);
}

function mapStateToProps(state) {
	return {
		nsfwEnabled: state.nsfwEnabled
	};
}

function mapDispatchToProps(dispatch) {
	return {
		toggleNSFW: () => dispatch(toggleNSFW())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(NSFWToggleSwitchContainer);
