import React from 'react';
import { Link } from 'react-router-dom';

function LoadError(props) {
	return (
		<div className="error">
			<p>ERROR</p>
			<p><Link to="/">Go to default view</Link></p>
		</div>
	)
}

export default LoadError;
