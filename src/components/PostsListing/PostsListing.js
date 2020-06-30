import React from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';
import './PostsListing.scss';

const propTypes = {
	data: PropTypes.array.isRequired,
	nsfwEnabled: PropTypes.bool.isRequired,
};

function PostsListing(props) {
	const { data, nsfwEnabled } = props;

	return (
		<div className="posts-listing">
			{data.map((item) => (
				<PostItem key={item.data.id} data={item.data} nsfwEnabled={nsfwEnabled} />
			))}
		</div>
	);
}

PostsListing.propTypes = propTypes;

export default PostsListing;
