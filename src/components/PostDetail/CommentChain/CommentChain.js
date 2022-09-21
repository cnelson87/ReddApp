import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import momentFromNow from 'utilities/momentFromNow';
import styles from './CommentChain.module.scss';

function processReplies(replies) {
	return (
		replies.data.children.map((item) => {
			if (item.kind === 'more') {
				return null;
			}
			return (
				<CommentChainReply key={item.data.id} data={item.data} />
			);
		})
	);
}

function CommentChainReply({ data }) {
	const { author, body, created_utc, replies } = data;
	const _created_utc = momentFromNow(created_utc);

	return (
		<div className={styles.reply}>
			<div className={styles.replyHeader}>
				<Link to={'/user/' + author}>u/{author}</Link> {_created_utc}
			</div>
			<div className={styles.replyBody}>
				{// eslint-disable-next-line
				}<ReactMarkdown children={body} />
			</div>
			{replies ?
				<div className={styles.replyFooter}>
					{processReplies(replies)}
				</div>
			: null}
		</div>
	);
}

function CommentChain({ data }) {
	const { id, author, body, created_utc, replies } = data;
	const _created_utc = momentFromNow(created_utc);

	return (
		<div className={styles.component} data-id={id}>
			<header className={styles.header}>
				<Link to={'/user/' + author}>u/{author}</Link> {_created_utc}
			</header>
			<div className={styles.body}>
				{// eslint-disable-next-line
				}<ReactMarkdown children={body} />
			</div>
			{replies ?
				<footer className={styles.footer}>
					{processReplies(replies)}
				</footer>
			: null}
		</div>
	);
}

CommentChainReply.propTypes = {
	data: PropTypes.object.isRequired
};

CommentChain.propTypes = {
	data: PropTypes.object.isRequired
};

export default CommentChain;
