import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import moment from 'moment';
import CommentChain from '../components/CommentChain';

function PostDetail(props) {
	const { id, author, created, is_video, media, selftext, subreddit, thumbnail, title, url } = props.data;
	const { comments } = props;
	const mediaImage = !is_video && url.match(/\.(gif|png|jpg|jpeg)$/i) ? url : null;
	const thumbnailImage = !is_video && !mediaImage && thumbnail.match(/\.(gif|png|jpg|jpeg)$/i) ? thumbnail : null;
	const createdTimeAgo = moment(created * 1000).fromNow();
	const video = !is_video ? null : {
		height: media.reddit_video.height,
		width: media.reddit_video.width,
		src: media.reddit_video.fallback_url
	};
	// console.log(comments);

	return (
		<article className="post-detail" data-id={id}>
			<header className="post-detail--header">
				<Link to={'/r/' + subreddit}>r/{subreddit}</Link> &nbsp; &nbsp; posted by <Link to={'/u/' + author}>u/{author}</Link> {createdTimeAgo}
			</header>
			<div className="post-detail--main">
				<div className="post-detail--content">
					<h2>{title}</h2>
					{!selftext ? null :
						<div className="post-detail--body">
							<ReactMarkdown source={selftext} />
						</div>
					}
				</div>
				<div className="post-detail--thumbnail">
					{!thumbnailImage ? null :
						<img src={thumbnailImage} alt="" />
					}
				</div>
			</div>
			<div className="post-detail--media">
				{!is_video ? null :
					<video controls preload="auto" height={video.height} width={video.width} src={video.src}></video>
				}
				{!mediaImage ? null :
					<img src={mediaImage} alt="" />
				}
			</div>
			<footer className="post-detail--footer">
				{comments.map((item) => {
					if (item.kind === 'more') {
						return null;
					}
					return (
						<CommentChain key={item.data.id} data={item.data} />
					)
				})}
			</footer>
		</article>
	)
}

PostDetail.propTypes = {
	data: PropTypes.object.isRequired,
	comments: PropTypes.array.isRequired
};

export default PostDetail;
