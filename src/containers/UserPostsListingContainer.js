import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import axios from 'config/axios';
import Constants from 'config/Constants';
import PostsListing from 'components/PostsListing/PostsListing';
import LoadError from 'components/LoadError/LoadError';
import Loading from 'components/Loading/Loading';
import LoadMoreCTA from 'components/LoadMoreCTA/LoadMoreCTA';

const { postsLimit } = Constants;

function UserPostsListingContainer({ sort, user }) {
	const [data, setData] = useState([]);
	const [next, setNext] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// on mount
	useEffect(() => {
		getData();
	}, []);

	function getData() {
		const fetchUrl = `/user/${user}.json?sort=${sort}&limit=${postsLimit}&after=${next}`;
		setLoading(true);
		axios.get(fetchUrl)
			.then((response) => {
				const { children:newData, after } = response.data.data;
				//combine existing data with new data
				const combinedData = [...data, ...newData];
				//create a set of unique id's and destructure to an array
				const dataSet = [...new Set(combinedData.map((item) => item.data.id))];
				//use dataSet to creae an array of de-duped data
				const deDupedData = dataSet.map((id) => {
					return combinedData.find((item) => item.data.id === id);
				});
				setLoading(false);
				setData(deDupedData);
				setNext(after);
			})
			.catch((error) => {
				// console.warn('fetch error:', error);
				setLoading(false);
				setError(error);
			});
	}

	const handleLoadMoreClick = () => {
		getData();
	};

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
			{data ? <PostsListing data={data} /> : null}
			{loading ? <Loading /> : null}
			{!loading && next ? <LoadMoreCTA handleClick={handleLoadMoreClick} /> : null}
		</>
	);
}

UserPostsListingContainer.propTypes = {
	sort: PropTypes.string.isRequired,
	user: PropTypes.string.isRequired,
};

export default UserPostsListingContainer;
