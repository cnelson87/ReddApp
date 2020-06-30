import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'config/axios';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import LoadError from 'components/LoadError/LoadError';
import Loading from 'components/Loading/Loading';
import PostDetail from 'components/PostDetail/PostDetail';
import './PostDetailView.scss';

class PostDetailView extends React.Component {

	state = {
		data: null,
		comments: null,
		loading: false,
		error: null,
	};

	modalRef = React.createRef();

	getData(url) {
		const fetchUrl = `${url}.json`;
		axios.get(fetchUrl)
			.then((response) => {
				// console.log('fetch response:', response);
				this.setState({
					data: response.data[0].data.children[0].data,
					comments: response.data[1].data.children,
					loading: false,
				});
			})
			.catch((error) => {
				// console.log('fetch error:', error);
				this.setState({
					loading: false,
					error: error,
				});
			});
	}

	componentDidMount() {
		const { url } = this.props.match;
		disableBodyScroll(this.modalRef.current);
		this.getData(url);
	}

	componentWillUnmount() {
		enableBodyScroll(this.modalRef.current);
	}

	render() {
		const { isModal, history } = this.props;
		const { subreddit } = this.props.match.params;
		const { data, comments, error } = this.state;

		return (
			<div className="post-detail-view" ref={this.modalRef}>
				<header className="post-detail-view--headerbar">
					{isModal ? (
						<button type="button" className="btn btn-sm post-detail-view--close-btn" onClick={(event) => {
							event.preventDefault();
							history.goBack();
						}}>X CLOSE</button>
					) : (
						<Link className="btn btn-sm post-detail-view--close-btn" to={'/r/' + subreddit}>r/{subreddit}</Link>
					)}
				</header>
				<div className="post-detail-view--container">
					{error ? <LoadError /> : null}
					{!data ? <Loading /> : null}
					{!error && data ? <PostDetail data={data} comments={comments} /> : null}
				</div>
			</div>
		);
	}
}

export default withRouter(PostDetailView);
