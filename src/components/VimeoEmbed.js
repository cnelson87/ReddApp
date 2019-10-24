import React from 'react';
import PropTypes from 'prop-types';

function VimeoEmbed(props) {
	const { title, html } = props.data;
	const id = decodeURIComponent(html).split('/video/')[1].split('?')[0];
	const src = `https://player.vimeo.com/video/${id}`;

	return (
		<div className="ar-16x9 vimeo-embed">
			<iframe allowFullScreen frameBorder="0" height="360" width="640" src={src} title={title}></iframe>
		</div>
	);
}

VimeoEmbed.propTypes = {
	data: PropTypes.object.isRequired,
};

export default VimeoEmbed;
