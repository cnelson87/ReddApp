import React from 'react';
import '../styles/components/loading.scss';

function Loading(props) {
	const { message = 'Loading...'} = props;

	return (
		<div className="loading">
			<p className="loading--message">{message}</p>
		</div>
	);
}

export default Loading;
