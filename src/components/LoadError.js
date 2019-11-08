import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/load-error.scss';

function LoadError(props) {
	const message = 'ERROR';

	return (
		<div className="load-error">
			<p className="load-error--message">{message}</p>
			<p><Link to="/">Go to default view</Link></p>
		</div>
	);
}

export default LoadError;
