import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	src: PropTypes.string.isRequired,
};

function VideoPlayer(props) {
	const { height, width, src } = props;

	return (
		<video controls preload="auto" height={height} width={width} src={src}></video>
	);
}

VideoPlayer.propTypes = propTypes;

export default VideoPlayer;
