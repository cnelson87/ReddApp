import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import momentFromNow from 'utilities/momentFromNow';
import './CommentChain.scss';

const propTypes = {
	data: PropTypes.object.isRequired
};

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
	);
}

function CommentChainReply(props) {
	const { author, body, created_utc, replies } = props.data;
	const _created_utc = momentFromNow(created_utc);

	return (
		<div className="comment-chain--reply">
			<div className="comment-chain--reply-header">
				<Link to={'/user/' + author}>u/{author}</Link> {_created_utc}
			</div>
			<div className="comment-chain--reply-body">
				<ReactMarkdown source={body} />
			</div>
			{replies ?
				<div className="comment-chain--reply-footer">
					{processReplies(replies)}
				</div>
			: null}
		</div>
	);
}

function CommentChain(props) {
	const { id, author, body, created_utc, replies } = props.data;
	const _created_utc = momentFromNow(created_utc);

	return (
		<div className="comment-chain" data-id={id}>
			<header className="comment-chain--header">
				<Link to={'/user/' + author}>u/{author}</Link> {_created_utc}
			</header>
			<div className="comment-chain--body">
				<ReactMarkdown source={body} />
			</div>
			{replies ?
				<footer className="comment-chain--footer">
					{processReplies(replies)}
				</footer>
			: null}
		</div>
	);
}

CommentChainReply.propTypes = propTypes;

CommentChain.propTypes = propTypes;

export default CommentChain;
