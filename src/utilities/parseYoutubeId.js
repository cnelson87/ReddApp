
function parseYoutubeId(html) {
	// split between 'embed' and '?'
	const videoId = decodeURIComponent(html).split('/embed/')[1].split('?')[0];
	return videoId;
}

export default parseYoutubeId;
