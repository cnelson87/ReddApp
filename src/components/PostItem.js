import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import VimeoEmbed from '../components/VimeoEmbed';
import YoutubeEmbed from '../components/YoutubeEmbed';
import VideoEmbed from '../components/VideoEmbed';
import OverlayBlock from '../components/OverlayBlock';
import momentFromNow from '../utilities/momentFromNow';

function PostItem(props) {
	const { id, author, created_utc, is_video, over_18, permalink, media, selftext, subreddit, thumbnail, title, url } = props.data;
	const { nsfwEnabled } = props;
	const is_vimeo = media && media.type && media.type.includes('vimeo');
	const is_youtube = media && media.type && media.type.includes('youtube');
	const _created_utc = momentFromNow(created_utc);
	const _media_image = !is_video && !is_vimeo && !is_youtube && url && url.match(/\.(gif|png|jpg|jpeg)$/i) ? url : null;
	const _thumbnail = !is_video && !is_vimeo && !is_youtube && !_media_image && thumbnail && thumbnail.match(/\.(gif|png|jpg|jpeg)$/i) ? thumbnail : null;
	// console.log(props.data);

	return (
		<article className="post-item" data-id={id}>
			<header className="post-item--header">
				<Link to={'/r/' + subreddit}>r/{subreddit}</Link> &nbsp; &nbsp; posted by <Link to={'/u/' + author}>u/{author}</Link> {_created_utc}
			</header>
			<div className="post-item--main">
				<div className="post-item--content">
					<h3><Link to={permalink}>{title}</Link></h3>
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
					<VimeoEmbed data={media.oembed} />
				: null}
				{is_youtube ?
					<YoutubeEmbed data={media.oembed} />
				: null}
				{is_video ?
					<VideoEmbed height={media.reddit_video.height} width={media.reddit_video.width} src={media.reddit_video.fallback_url} />
				: null}
				{_media_image ?
					<Link to={permalink}><img src={_media_image} alt="" /></Link>
				: null}
			</div>
			<footer className="post-item--footer">
				<Link to={permalink}>{permalink}</Link>
			</footer>
			{over_18 && !nsfwEnabled ? <OverlayBlock message={'NSFW'} /> : null}
		</article>
	)
}

PostItem.propTypes = {
	data: PropTypes.object.isRequired,
	nsfwEnabled: PropTypes.bool,
};

export default PostItem;
