import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	videoId: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

function YoutubeEmbed(props) {
	const { videoId, title } = props;
	const src = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="ar-16x9">
			<iframe allowFullScreen frameBorder="0" height="360" width="640" src={src} title={title}></iframe>
		</div>
	);
}

YoutubeEmbed.propTypes = propTypes;

export default YoutubeEmbed;
