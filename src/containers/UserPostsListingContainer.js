import React from 'react';
import Constants from '../config/Constants';
import LoadError from '../components/LoadError';
import Loading from '../components/Loading';
import PostsListing from '../components/PostsListing';
import LoadMoreCTA from '../components/LoadMoreCTA';

const { apiBaseUrl, postsLimit } = Constants;

class UserPostsListingContainer extends React.Component {

	state = {
		data: [],
		next: null,
		loading: false,
		error: null,
	};

	getData() {
		const { user, sort } = this.props;
		const { data, next } = this.state;
		let fetchUrl = `${apiBaseUrl}/user/${user}.json?sort=${sort}limit=${postsLimit}&after=${next}`;
		this.setState({loading: true}, () => {
			fetch(fetchUrl)
				.then((response) => response.json())
				.then((json) => {
					const { children:newData, after } = json.data;
					//combine existing data with new data
					const combinedData = [...data, ...newData];
					//create a set of unique id's and destructure to an array
					const dataSet = [...new Set(combinedData.map((item) => item.data.id))];
					//use dataSet to creae an array of de-duped data
					const deDupedData = dataSet.map((id) => {
						return combinedData.find((item) => item.data.id === id)
					});
					this.setState({
						data: deDupedData,
						next: after,
						loading: false,
					});
				}).catch((error) => {
					// console.log('fetch error:', error);
					this.setState({
						loading: false,
						error: error,
					});
				});
		});
	}

	onLoadMoreClick = () => {
		this.getData();
	}

	componentDidMount() {
		this.getData();
	}

	render() {
		const { data, next, loading, error } = this.state;

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
				<PostsListing data={data} />
				{loading ? <Loading /> : null}
				{!loading && next ? <LoadMoreCTA onClick={this.onLoadMoreClick} /> : null}
			</>
		);
	}
}

export default UserPostsListingContainer;
