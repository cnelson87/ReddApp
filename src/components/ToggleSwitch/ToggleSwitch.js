import React from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.scss';

function ToggleSwitch(props) {
	const { label, identifier, checked, onChange } = props;

	return (
		<label className="toggle-switch" htmlFor={identifier}>
			<span className="toggle-switch--label">{label}</span>
			<input type="checkbox" id={identifier} name={identifier} checked={checked} onChange={onChange} />
			<div className="toggle-switch--slider">
				<div className="toggle-switch--button"></div>
			</div>
		</label>
	);
}

ToggleSwitch.propTypes = {
	identifier: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default ToggleSwitch;
