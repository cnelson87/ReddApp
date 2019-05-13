import React from 'react';

import Constants from '../config/Constants';
import LoadError from '../components/LoadError';
import Loading from '../components/Loading';
import PostDetail from '../components/PostDetail';
import '../styles/components/loading.scss';
import '../styles/components/post-detail.scss';
import '../styles/components/comment-chain.scss';

const { apiBaseUrl } = Constants;

class PostDetailView extends React.Component {

	state = {
		data: null,
		comments: null,
		loading: false,
		error: null,
	};

	getData(url) {
		let fetchUrl = `${apiBaseUrl}${url}.json`;
		fetch(fetchUrl)
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					data: json[0].data.children[0].data,
					comments: json[1].data.children,
					loading: false,
				})
			}).catch((error) => {
				// console.log('fetch error:', error);
				this.setState({
					loading: false,
					error: error,
				})
			});
	}

	componentDidMount() {
		const { url } = this.props.match;
		this.getData(url);
	}

	render() {
		const { data, comments, error } = this.state;
		// console.log(data);
		// console.log(comments);

		if (error) {
			return (
				<LoadError />
			);
		}

		if (!data) {
			return (
				<Loading />
			);
		}

		return (
			<div className="post-detail-view">
				<PostDetail data={data} comments={comments} />
			</div>
		);
	}
}

export default PostDetailView;
