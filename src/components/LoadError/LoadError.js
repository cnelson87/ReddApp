import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LoadError.scss';

const propTypes = {
	message: PropTypes.string
};

function LoadError(props) {
	const { message = 'ERROR'} = props;

	return (
		<div className="load-error">
			<p className="load-error--message">{message}</p>
			<Link to="/">Homepage</Link>
		</div>
	);
}

LoadError.propTypes = propTypes;

export default LoadError;
