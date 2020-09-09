import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	videoId: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

function VimeoEmbed(props) {
	const { videoId, title } = props;
	const src = `https://player.vimeo.com/video/${videoId}`;

	return (
		<div className="ar-16x9">
			<iframe allowFullScreen frameBorder="0" height="360" width="640" src={src} title={title}></iframe>
		</div>
	);
}

VimeoEmbed.propTypes = propTypes;

export default VimeoEmbed;
