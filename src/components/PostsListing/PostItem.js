import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import OverlayBlock from 'components/OverlayBlock/OverlayBlock';
import VideoPlayer from 'components/VideoPlayer';
import VimeoEmbed from 'components/VimeoEmbed';
import YoutubeEmbed from 'components/YoutubeEmbed';
import momentFromNow from 'utilities/momentFromNow';
import parseVimeoId from 'utilities/parseVimeoId';
import parseYoutubeId from 'utilities/parseYoutubeId';

const propTypes = {
	data: PropTypes.object.isRequired,
	nsfwEnabled: PropTypes.bool.isRequired,
};

function PostItem(props) {
	// console.log(props.data);
	const { id, author, created_utc, is_video, over_18, permalink, media, selftext, subreddit, thumbnail, title, url } = props.data;
	const { nsfwEnabled } = props;
	const is_vimeo = media && media.type && media.type.includes('vimeo');
	const is_youtube = media && media.type && media.type.includes('youtube');
	const _created_utc = momentFromNow(created_utc);
	const _media_image = !is_video && !is_vimeo && !is_youtube && url && url.match(/\.(gif|png|jpg|jpeg)$/i) ? url : null;
	const _thumbnail = !is_video && !is_vimeo && !is_youtube && !_media_image && thumbnail && thumbnail.match(/\.(gif|png|jpg|jpeg)$/i) ? thumbnail : null;

	return (
		<article className="post-item" data-id={id}>
			<header className="post-item--header">
				<Link to={'/r/' + subreddit}>r/{subreddit}</Link> &nbsp; &nbsp; posted by <Link to={'/user/' + author}>u/{author}</Link> {_created_utc}
			</header>
			<div className="post-item--main">
				<div className="post-item--content">
					<h3><Link to={permalink}><span dangerouslySetInnerHTML={{__html: title }}></span></Link></h3>
					{selftext ?
						<div className="post-item--body">
							<ReactMarkdown source={selftext} />
						</div>
					: null}
				</div>
				<div className="post-item--thumbnail">
					{_thumbnail ?
						<Link to={permalink}><img src={_thumbnail} alt="" /></Link>
					: null}
				</div>
			</div>
			<div className="post-item--media">
				{is_vimeo ?
					<VimeoEmbed videoId={parseVimeoId(media.oembed.html)} title={media.oembed.title} />
				: null}
				{is_youtube ?
					<YoutubeEmbed videoId={parseYoutubeId(media.oembed.html)} title={media.oembed.title} />
				: null}
				{is_video ?
					<VideoPlayer height={media.reddit_video.height} width={media.reddit_video.width} src={media.reddit_video.fallback_url} />
				: null}
				{_media_image ?
					<Link to={permalink}><img src={_media_image} alt="" /></Link>
				: null}
			</div>
			<footer className="post-item--footer">
				<Link to={{ pathname: permalink, state: {modal: true} }}>{permalink}</Link>
			</footer>
			{over_18 && !nsfwEnabled ? <OverlayBlock message={'NSFW'} /> : null}
		</article>
	);
}

PostItem.propTypes = propTypes;

export default PostItem;
