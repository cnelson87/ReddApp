import React from 'react';
import PropTypes from 'prop-types';
import './Loading.scss';

const propTypes = {
	message: PropTypes.string
};

function Loading(props) {
	const { message = 'Loading...'} = props;

	return (
		<div className="loading">
			<p className="loading--message">{message}</p>
		</div>
	);
}

Loading.propTypes = propTypes;

export default Loading;
