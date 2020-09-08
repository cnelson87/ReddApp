import React from 'react';
import PropTypes from 'prop-types';
import './OverlayBlock.scss';

const propTypes = {
	message: PropTypes.string
};

function OverlayBlock(props) {
	const { message } = props;

	return (
		<div className="overlay-block">
			{message ?
				<p className="overlay-block--message">{message}</p>
			: null}
		</div>
	);
}

OverlayBlock.propTypes = propTypes;

export default OverlayBlock;
