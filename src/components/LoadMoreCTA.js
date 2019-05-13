import React from 'react';

function LoadMoreCTA(props) {
	const { onClick } = props;
	return (
		<div className="load-more-cta">
			<button type="button" className="btn-lrg" onClick={onClick}>Load More</button>
		</div>
	)
}

export default LoadMoreCTA;
