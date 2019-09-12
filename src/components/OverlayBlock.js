import React from 'react';

function OverlayBlock(props) {
	const { message } = props;

	return (
		<div className="overlay-block">
			<p className="overlay-block--message">{message}</p>
		</div>
	)
}

export default OverlayBlock;
