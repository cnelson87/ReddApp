import React from 'react';
import PropTypes from 'prop-types';

import styles from './Loading.module.scss';

function Loading({ message = 'Loading...'}) {

	return (
		<div className={styles.component}>
			<p className={styles.message}>{message}</p>
		</div>
	);
}

Loading.propTypes = {
	message: PropTypes.string
};

export default Loading;
