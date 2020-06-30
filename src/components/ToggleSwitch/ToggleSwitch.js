import React from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.scss';

const propTypes = {
	identifier: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	isChecked: PropTypes.bool.isRequired,
	handleChange: PropTypes.func.isRequired,
};

function ToggleSwitch(props) {
	const { label, identifier, isChecked, handleChange } = props;

	return (
		<label className="toggle-switch" htmlFor={identifier}>
			<span className="toggle-switch--label">{label}</span>
			<input type="checkbox" id={identifier} name={identifier} checked={isChecked} onChange={handleChange} />
			<div className="toggle-switch--slider">
				<div className="toggle-switch--button"></div>
			</div>
		</label>
	);
}

ToggleSwitch.propTypes = propTypes;

export default ToggleSwitch;
