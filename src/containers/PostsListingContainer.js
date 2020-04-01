import React from 'react';
import { connect } from 'react-redux';
import PostsListing from 'components/PostsListing';

class PostsListingContainer extends React.Component {

	render() {
		const { data, nsfwEnabled } = this.props;
		// console.log('PostsListingContainer:data', data);

		return (
			<PostsListing data={data} nsfwEnabled={nsfwEnabled} />
		);
	}
}

function mapStateToProps(state) {
	return {
		nsfwEnabled: state.nsfwEnabled
	};
}

export default connect(mapStateToProps)(PostsListingContainer);
