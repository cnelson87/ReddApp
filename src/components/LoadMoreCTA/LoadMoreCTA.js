import React from 'react';
import PropTypes from 'prop-types';
import './LoadMoreCTA.scss';

const propTypes = {
	label: PropTypes.string,
	handleClick: PropTypes.func.isRequired,
};

function LoadMoreCTA(props) {
	const { label = 'Load More', handleClick } = props;

	return (
		<div className="load-more-cta">
			<button type="button" className="btn btn-lg" onClick={handleClick}>{label}</button>
		</div>
	);
}

LoadMoreCTA.propTypes = propTypes;

export default LoadMoreCTA;
