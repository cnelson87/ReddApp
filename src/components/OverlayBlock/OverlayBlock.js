import React from 'react';
import PropTypes from 'prop-types';

import styles from './OverlayBlock.module.scss';

function OverlayBlock({ message }) {

	return (
		<div className={styles.component}>
			{message ?
				<p className={styles.message}>{message}</p>
			: null}
		</div>
	);
}

OverlayBlock.propTypes = {
	message: PropTypes.string
};

export default OverlayBlock;
