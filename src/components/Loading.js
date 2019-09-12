import React from 'react';

function Loading(props) {
	const message = 'Loading...';

	return (
		<div className="loading">
			<p className="loading--message">{message}</p>
		</div>
	)
}

export default Loading;
