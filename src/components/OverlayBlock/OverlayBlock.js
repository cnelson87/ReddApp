import React from 'react';
import PropTypes from 'prop-types';
import './OverlayBlock.scss';

const propTypes = {
	message: PropTypes.string.isRequired
};

function OverlayBlock(props) {
	const { message } = props;

	return (
		<div className="overlay-block">
			<p className="overlay-block--message">{message}</p>
		</div>
	);
}

OverlayBlock.propTypes = propTypes;

export default OverlayBlock;
