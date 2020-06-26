import React from 'react';
import axios from 'config/axios';
import LoadError from 'components/LoadError';
import Loading from 'components/Loading';
import PostDetail from 'components/PostDetail';

class PostDetailView extends React.Component {

	state = {
		data: null,
		comments: null,
		loading: false,
		error: null,
	};

	getData(url) {
		const fetchUrl = `${url}.json`;
		axios.get(fetchUrl)
			.then((response) => {
				// console.log('fetch response:', response);
				this.setState({
					data: response.data[0].data.children[0].data,
					comments: response.data[1].data.children,
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
				<div className="post-detail-view">
					<LoadError />
				</div>
			);
		}

		if (!data) {
			return (
				<div className="post-detail-view">
					<Loading />
				</div>
			);
		}

		return (
			<div className="post-detail-view react-transition fade-in">
				<PostDetail data={data} comments={comments} />
			</div>
		);
	}
}

export default PostDetailView;
