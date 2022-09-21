import React from 'react';
import PropTypes from 'prop-types';

import styles from './LoadMoreCTA.module.scss';

function LoadMoreCTA({ label = 'Load More', handleClick }) {

	return (
		<div className={styles.component}>
			<button type="button" className="btn btn-lg" onClick={handleClick}>{label}</button>
		</div>
	);
}

LoadMoreCTA.propTypes = {
	label: PropTypes.string,
	handleClick: PropTypes.func.isRequired,
};

export default LoadMoreCTA;
