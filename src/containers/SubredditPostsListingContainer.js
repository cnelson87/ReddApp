import React from 'react';
import { connect } from 'react-redux';
import axios from 'config/axios';
import Constants from 'config/Constants';
import PostsListing from 'components/PostsListing/PostsListing';
import LoadError from 'components/LoadError/LoadError';
import Loading from 'components/Loading/Loading';
import LoadMoreCTA from 'components/LoadMoreCTA/LoadMoreCTA';

const { postsLimit } = Constants;

class SubredditPostsListingContainer extends React.Component {

	state = {
		loading: false,
		data: [],
		next: null,
		error: null,
	};

	handleLoadMoreClick = this.handleLoadMoreClick.bind(this);

	getData() {
		const { subreddit, sort } = this.props;
		const { data, next } = this.state;
		const fetchUrl = `/r/${subreddit}/${sort}.json?limit=${postsLimit}&after=${next}`;
		this.setState({loading: true}, () => {
			axios.get(fetchUrl)
				.then((response) => {
					const { children:newData, after } = response.data.data;
					//combine existing data with new data
					const combinedData = [...data, ...newData];
					//create a set of unique id's and destructure to an array
					const dataSet = [...new Set(combinedData.map((item) => item.data.id))];
					//use dataSet to creae an array of de-duped data
					const deDupedData = dataSet.map((id) => {
						return combinedData.find((item) => item.data.id === id)
					});
					this.setState({
						loading: false,
						data: deDupedData,
						next: after,
					});
				})
				.catch((error) => {
					// console.log('fetch error:', error);
					this.setState({
						loading: false,
						error: error,
					});
				});
		});
	}

	handleLoadMoreClick() {
		this.getData();
	}

	componentDidMount() {
		this.getData();
	}

	render() {
		const { nsfwEnabled } = this.props;
		const { loading, data, next, error } = this.state;

		if (error) {
			return (
				<LoadError />
			);
		}

		if (!data.length) {
			return (
				<Loading />
			);
		}

		return (
			<>
				{data ? <PostsListing data={data} nsfwEnabled={nsfwEnabled} /> : null}
				{loading ? <Loading /> : null}
				{!loading && next ? <LoadMoreCTA handleClick={this.handleLoadMoreClick} /> : null}
			</>
		);
	}
}

function mapStateToProps(state) {
	return {
		nsfwEnabled: state.nsfwEnabled
	};
}

export default connect(mapStateToProps)(SubredditPostsListingContainer);
