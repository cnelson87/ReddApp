import React from 'react';
import PropTypes from 'prop-types';

function VideoPlayer({ height, width, src }) {

	return (
		<video controls preload="auto" height={height} width={width} src={src}></video>
	);
}

VideoPlayer.propTypes = {
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	src: PropTypes.string.isRequired,
};

export default VideoPlayer;
