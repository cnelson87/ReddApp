import React from 'react';
import PropTypes from 'prop-types';

import styles from './ToggleSwitch.module.scss';

function ToggleSwitch({ label, identifier, isChecked, handleChange }) {

	return (
		<label className={styles.component} htmlFor={identifier}>
			<span className={styles.label}>{label}</span>
			<input type="checkbox" id={identifier} name={identifier} checked={isChecked} onChange={handleChange} />
			<div className={styles.slider}>
				<div className={styles.button}></div>
			</div>
		</label>
	);
}

ToggleSwitch.propTypes = {
	identifier: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	isChecked: PropTypes.bool.isRequired,
	handleChange: PropTypes.func.isRequired,
};

export default ToggleSwitch;
