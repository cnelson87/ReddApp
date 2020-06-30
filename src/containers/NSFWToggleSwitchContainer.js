import React from 'react';
import { connect } from 'react-redux';
import textStrings from 'config/textStrings';
import ToggleSwitch from 'components/ToggleSwitch/ToggleSwitch';
import { toggleNSFW } from 'store/actions/nsfw';

function NSFWToggleSwitchContainer(props) {
	const { nsfwEnabled, toggleNSFW } = props;

	return (
		<ToggleSwitch identifier={"toggle-nsfw"} label={textStrings.labelEnableNSFW} checked={nsfwEnabled} onChange={toggleNSFW} />
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
