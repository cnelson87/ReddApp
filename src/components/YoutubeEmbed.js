import React from 'react';
import PropTypes from 'prop-types';

function YoutubeEmbed(props) {
	const { title, html } = props.data;
	const id = html.split('/embed/')[1].split('?')[0];
	const src = `https://www.youtube.com/embed/${id}`;

	return (
		<div className="ar-16x9 youtube-embed">
			<iframe allowFullScreen frameBorder="0" height="360" width="640" src={src} title={title}></iframe>
		</div>
	)
}

YoutubeEmbed.propTypes = {
	data: PropTypes.object.isRequired,
};

export default YoutubeEmbed;
