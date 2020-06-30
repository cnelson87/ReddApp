import React from 'react';
import './LoadMoreCTA.scss';

function LoadMoreCTA(props) {
	const { onClick } = props;

	return (
		<div className="load-more-cta">
			<button type="button" className="btn btn-lg" onClick={onClick}>Load More</button>
		</div>
	);
}

export default LoadMoreCTA;
