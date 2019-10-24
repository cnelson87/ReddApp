import React from 'react';
import PropTypes from 'prop-types';

function VideoEmbed(props) {
	const { height, width, src } = props;

	return (
		<video controls preload="auto" height={height} width={width} src={src}></video>
	);
}

VideoEmbed.propTypes = {
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	src: PropTypes.string.isRequired,
};

export default VideoEmbed;
