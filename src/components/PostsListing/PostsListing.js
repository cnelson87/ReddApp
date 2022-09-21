import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import PostItem from './PostItem/PostItem';

function PostsListing({ data }) {
	const { nsfwEnabled } = useSelector((state) => state.appVars);

	return (
		<>
			{data.map((item) => (
				<PostItem key={item.data.id} data={item.data} nsfwEnabled={nsfwEnabled} />
			))}
		</>
	);
}

PostsListing.propTypes = {
	data: PropTypes.array.isRequired
};

export default PostsListing;
