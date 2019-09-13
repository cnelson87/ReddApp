import React from 'react';
import '../styles/components/toggle-switch.scss';

function ToggleSwitch(props) {
	const { label, name } = props;
	// const checked = false

	return (
		<label className="toggle-switch">
			<span className="toggle-switch--label">{label}</span>
			<input type="checkbox" id={name} name={name} />
			<div className="toggle-switch--slider">
				<div className="toggle-switch--button"></div>
			</div>
		</label>
	)
}

export default ToggleSwitch;
