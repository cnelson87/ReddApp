import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import moment from 'moment';

function processReplies(replies) {

	return (
		replies.data.children.map((item) => {
			if (item.kind === 'more') {
				return null;
			}
			return (
				<CommentChainReply key={item.data.id} data={item.data} />
			)
		})
	)
}

function CommentChainReply(props) {
	const { author, body, created, replies } = props.data;
	const createdTimeAgo = moment(created * 1000).fromNow();

	return (
		<div className="comment-chain--reply">
			<div className="comment-chain--reply-header">
				<Link to={'/u/' + author}>u/{author}</Link> {createdTimeAgo}
			</div>
			<div className="comment-chain--reply-body">
				<ReactMarkdown source={body} />
			</div>
			{!replies ? null :
				<div className="comment-chain--reply-footer">
					{processReplies(replies)}
				</div>
			}
		</div>
	)
}

function CommentChain(props) {
	const { id, author, body, created, replies } = props.data;
	const createdTimeAgo = moment(created * 1000).fromNow();

	return (
		<div className="comment-chain" data-id={id}>
			<header className="comment-chain--header">
				<Link to={'/u/' + author}>u/{author}</Link> {createdTimeAgo}
			</header>
			<div className="comment-chain--body">
				<ReactMarkdown source={body} />
			</div>
			{!replies ? null :
				<footer className="comment-chain--footer">
					{processReplies(replies)}
				</footer>
			}
		</div>
	)
}

CommentChain.propTypes = {
	data: PropTypes.object.isRequired
};

export default CommentChain;
