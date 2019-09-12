import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import moment from 'moment';
import OverlayBlock from '../components/OverlayBlock';

function PostItem(props) {
	const { id, author, created, is_video, over_18, permalink, media, selftext, subreddit, thumbnail, title, url } = props.data;
	const mediaImage = !is_video && url && url.match(/\.(gif|png|jpg|jpeg)$/i) ? url : null;
	const thumbnailImage = !is_video && !mediaImage && thumbnail && thumbnail.match(/\.(gif|png|jpg|jpeg)$/i) ? thumbnail : null;
	const createdTimeAgo = moment(created * 1000).fromNow();
	const video = !is_video ? null : {
		height: media.reddit_video.height,
		width: media.reddit_video.width,
		src: media.reddit_video.fallback_url
	};
	// console.log(props.data);

	return (
		<article className="post-item" data-id={id}>
			<header className="post-item--header">
				<Link to={'/r/' + subreddit}>r/{subreddit}</Link> &nbsp; &nbsp; posted by <Link to={'/u/' + author}>u/{author}</Link> {createdTimeAgo}
			</header>
			<div className="post-item--main">
				<div className="post-item--content">
					<h3><Link to={permalink}>{title}</Link></h3>
					{!selftext ? null :
						<div className="post-item--body">
							<ReactMarkdown source={selftext} />
						</div>
					}
				</div>
				<div className="post-item--thumbnail">
					{!thumbnailImage ? null :
						<img src={thumbnailImage} alt="" />
					}
				</div>
			</div>
			<div className="post-item--media">
				{!is_video ? null :
					<video controls preload="auto" height={video.height} width={video.width} src={video.src}></video>
				}
				{!mediaImage ? null :
					<img src={mediaImage} alt="" />
				}
			</div>
			<footer className="post-item--footer">
				<Link to={permalink}>{permalink}</Link>
			</footer>
			{!over_18 ? null :
				<OverlayBlock message={'NSFW'} />
			}
		</article>
	)
}

PostItem.propTypes = {
	data: PropTypes.object.isRequired
};

export default PostItem;
