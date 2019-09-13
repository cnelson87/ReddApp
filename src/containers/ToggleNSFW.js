import React from 'react';
import { connect } from 'react-redux';
import ToggleSwitch from '../components/ToggleSwitch';

class ToggleNSFW extends React.Component {

	onChange = () => {
		console.log('ToggleNSFW:onChange');
	}

	// onChange = this.onChange.bind(this);

	render() {
		const { nsfwEnabled } = this.props;

		return (
			<ToggleSwitch label={"Show NSFW"} name={"toggle-nsfw"} checked={nsfwEnabled} onChange={this.onChange} />
		);
	}
}

const mapStateToProps = (state) => ({
	nsfwEnabled: state.nsfwEnabled
})

export default connect(mapStateToProps)(ToggleNSFW);
