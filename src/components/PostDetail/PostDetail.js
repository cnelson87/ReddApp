import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import CommentChain from './CommentChain/CommentChain';
import VideoPlayer from 'components/VideoPlayer/VideoPlayer';
import VimeoEmbed from 'components/VimeoEmbed/VimeoEmbed';
import YoutubeEmbed from 'components/YoutubeEmbed/YoutubeEmbed';
import momentFromNow from 'utilities/momentFromNow';
import parseVimeoId from 'utilities/parseVimeoId';
import parseYoutubeId from 'utilities/parseYoutubeId';
import styles from './PostDetail.module.scss';

function PostDetail({ data, comments }) {
	// console.log(data);
	// console.log(comments);
	const { id, author, created_utc, is_video, media, selftext, subreddit, thumbnail, title, url } = data;
	const is_vimeo = media && media.type && media.type.includes('vimeo');
	const is_youtube = media && media.type && media.type.includes('youtube');
	const _created_utc = momentFromNow(created_utc);
	const _media_image = !is_video && !is_vimeo && !is_youtube && url.match(/\.(gif|png|jpg|jpeg)$/i) ? url : null;
	const _thumbnail = !is_video && !is_vimeo && !is_youtube && !_media_image && thumbnail.match(/\.(gif|png|jpg|jpeg)$/i) ? thumbnail : null;

	return (
		<article className={`${styles.component} react-transition fade-in`} data-id={id}>
			<header className={styles.header}>
				<Link to={'/r/' + subreddit}>r/{subreddit}</Link> &nbsp; &nbsp; posted by <Link to={'/user/' + author}>u/{author}</Link> {_created_utc}
			</header>
			<div className={styles.main}>
				<div className={styles.content}>
					<h2><span dangerouslySetInnerHTML={{__html: title }}></span></h2>
					{selftext ?
						<div className={styles.body}>
							{// eslint-disable-next-line
							}<ReactMarkdown children={selftext} />
						</div>
					: null}
				</div>
				<div className={styles.thumbnail}>
					{_thumbnail ?
						<img src={_thumbnail} alt="" />
					: null}
				</div>
			</div>
			<div className={styles.media}>
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
					<img src={_media_image} alt="" />
				: null}
			</div>
			<footer className={styles.footer}>
				{comments.map((item) => {
					if (item.kind === 'more') {
						return null;
					}
					return (
						<CommentChain key={item.data.id} data={item.data} />
					);
				})}
			</footer>
		</article>
	);
}

PostDetail.propTypes = {
	data: PropTypes.object.isRequired,
	comments: PropTypes.array.isRequired,
};

export default PostDetail;
