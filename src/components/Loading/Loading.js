import React from 'react';
import './Loading.scss';

function Loading(props) {
	const { message = 'Loading...'} = props;

	return (
		<div className="loading">
			<p className="loading--message">{message}</p>
		</div>
	);
}

export default Loading;
