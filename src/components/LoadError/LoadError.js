import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './LoadError.module.scss';

function LoadError({ message = 'ERROR'}) {

	return (
		<div className={styles.component}>
			<p className={styles.message}>{message}</p>
			<Link to="/">Homepage</Link>
		</div>
	);
}

LoadError.propTypes = {
	message: PropTypes.string
};

export default LoadError;
