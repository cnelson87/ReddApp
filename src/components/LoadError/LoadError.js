import React from 'react';
import { Link } from 'react-router-dom';
import './LoadError.scss';

function LoadError(props) {
	const { message = 'ERROR'} = props;

	return (
		<div className="load-error">
			<p className="load-error--message">{message}</p>
			<Link to="/">Go to default view</Link>
		</div>
	);
}

export default LoadError;
