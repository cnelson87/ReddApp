import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import OverlayBlock from 'components/OverlayBlock/OverlayBlock';
import VideoPlayer from 'components/VideoPlayer/VideoPlayer';
import VimeoEmbed from 'components/VimeoEmbed/VimeoEmbed';
import YoutubeEmbed from 'components/YoutubeEmbed/YoutubeEmbed';
import momentFromNow from 'utilities/momentFromNow';
import numeralDecimalAbbr from 'utilities/numeralDecimalAbbr';
import parseVimeoId from 'utilities/parseVimeoId';
import parseYoutubeId from 'utilities/parseYoutubeId';
import styles from './PostItem.module.scss';

function PostItem({ data, nsfwEnabled }) {
	// console.log('PostItem');
	// console.log(data);
	const { id, author, created_utc, is_video, over_18, permalink, link_flair_text, media, selftext, subreddit, thumbnail, title, ups, url } = data;
	const is_vimeo = media && media.type && media.type.includes('vimeo');
	const is_youtube = media && media.type && media.type.includes('youtube');
	const _upvotes = ups ? numeralDecimalAbbr(ups) : null;
	const _created_utc = momentFromNow(created_utc);
	const _media_image = !is_video && !is_vimeo && !is_youtube && url && url.match(/\.(gif|png|jpg|jpeg)$/i) ? url : null;
	const _thumbnail = !is_video && !is_vimeo && !is_youtube && !_media_image && thumbnail && thumbnail.match(/\.(gif|png|jpg|jpeg)$/i) ? thumbnail : null;

	return (
		<article className={styles.component} data-id={id}>
			<header className={styles.header}>
				{_upvotes ? (
					<strong>{_upvotes}</strong>
				) : null}
				<Link to={'/r/' + subreddit}>r/{subreddit}</Link>
				<span>posted by <Link to={'/user/' + author}>u/{author}</Link></span>
				<span>{_created_utc}</span>
			</header>
			<div className={styles.main}>
				<div className={styles.content}>
					<div className={styles.title}>
						{link_flair_text ? (
							<span className={styles.flair}>
							{link_flair_text}
						</span>
						) : null}
						<h3><Link to={{ pathname: permalink, state: {modal: true} }}><span dangerouslySetInnerHTML={{__html: title }}></span></Link></h3>
					</div>
					{selftext ? (
						<div className={styles.body}>
							{// eslint-disable-next-line
							}<ReactMarkdown children={selftext} />
						</div>
					) : null}
				</div>
				<div className={styles.thumbnail}>
					{_thumbnail ? (
						<Link to={{ pathname: permalink, state: {modal: true} }}><img src={_thumbnail} alt="" /></Link>
					) : null}
				</div>
			</div>
			<div className={styles.media}>
				{is_vimeo ? (
					<VimeoEmbed videoId={parseVimeoId(media.oembed.html)} title={media.oembed.title} />
				) : null}
				{is_youtube ? (
					<YoutubeEmbed videoId={parseYoutubeId(media.oembed.html)} title={media.oembed.title} />
				) : null}
				{is_video ? (
					<VideoPlayer height={media.reddit_video.height} width={media.reddit_video.width} src={media.reddit_video.fallback_url} />
				) : null}
				{_media_image ? (
					<Link to={{ pathname: permalink, state: {modal: true} }}><img src={_media_image} alt="" /></Link>
				) : null}
			</div>
			<footer className={styles.footer}>
				<Link to={{ pathname: permalink, state: {modal: true} }}>{permalink}</Link>
			</footer>
			{over_18 && !nsfwEnabled ? (
				<OverlayBlock message={'NSFW'} />
			) : null}
		</article>
	);
}

PostItem.propTypes = {
	data: PropTypes.object.isRequired,
	nsfwEnabled: PropTypes.bool.isRequired,
};

export default PostItem;
