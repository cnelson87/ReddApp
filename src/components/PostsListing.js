import React from 'react';
import PropTypes from 'prop-types';
import PostItem from '../components/PostItem';

function PostsListing(props) {
	const { data, nsfwEnabled } = props;

	return (
		<div className="posts-listing">
			{data.map((item) => (
				<PostItem key={item.data.id} data={item.data} nsfwEnabled={nsfwEnabled} />
			))}
		</div>
	)
}

PostsListing.propTypes = {
	data: PropTypes.array.isRequired,
	nsfwEnabled: PropTypes.bool,
};

export default PostsListing;
