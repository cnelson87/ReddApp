import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/toggle-switch.scss';

function ToggleSwitch(props) {
	const { label, name, checked, onChange } = props;
	// const checked = false

	return (
		<label className="toggle-switch" htmlFor={name}>
			<span className="toggle-switch--label">{label}</span>
			<input type="checkbox" id={name} name={name} checked={checked} onChange={onChange} />
			<div className="toggle-switch--slider">
				<div className="toggle-switch--button"></div>
			</div>
		</label>
	)
}

ToggleSwitch.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default ToggleSwitch;
