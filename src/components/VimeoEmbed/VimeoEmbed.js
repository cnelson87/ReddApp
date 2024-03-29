import React from 'react';
import PropTypes from 'prop-types';

function VimeoEmbed({ videoId, title }) {
	const src = `https://player.vimeo.com/video/${videoId}`;

	return (
		<div className="ar-16x9">
			<iframe allowFullScreen frameBorder="0" height="360" width="640" src={src} title={title}></iframe>
		</div>
	);
}

VimeoEmbed.propTypes = {
	videoId: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default VimeoEmbed;
