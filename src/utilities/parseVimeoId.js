
function parseVimeoId(html) {
	// split between 'video' and '?'
	const videoId = decodeURIComponent(html).split('/video/')[1].split('?')[0];
	return videoId;
}

export default parseVimeoId;
