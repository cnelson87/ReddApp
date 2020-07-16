import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'config/axios';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import LoadError from 'components/LoadError/LoadError';
import Loading from 'components/Loading/Loading';
import PostDetail from 'components/PostDetail/PostDetail';
import './PostDetailView.scss';

class PostDetailView extends React.Component {

	state = {
		loading: false,
		data: null,
		comments: null,
		error: null,
	};

	modalRef = React.createRef();

	modalCloseBtnRef = React.createRef();

	getData(url) {
		const fetchUrl = `${url}.json`;
		this.setState({loading: true}, () => {
			axios.get(fetchUrl)
				.then((response) => {
					// console.log('fetch response:', response);
					this.setState({
						loading: false,
						data: response.data[0].data.children[0].data,
						comments: response.data[1].data.children,
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

	closeView() {
		const { isModal, history } = this.props;
		const { subreddit } = this.props.match.params;
		if (isModal) {
			history.goBack();
		}
		else {
			history.push('/r/' + subreddit);
		}
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
		const { isModal } = this.props;
		const { subreddit } = this.props.match.params;
		const { loading, data, comments, error } = this.state;

		const closeBtn = (
			<button type="button" className="btn btn-sm post-detail-view--close-btn" autoFocus={true}
				ref={this.modalCloseBtnRef}
				onClick={(event) => {
					event.preventDefault();
					this.closeView();
				}}>{isModal ? 'X CLOSE' : 'r/' + subreddit}</button>
		);

		return (
			<div className="post-detail-view" ref={this.modalRef} onKeyDown={(event) => {
				if (event.keyCode === 27) {
					this.closeView();
				}
			}}>
				<header className="post-detail-view--headerbar">
					<div className="post-detail-view--headerbar-container">
						{closeBtn}
					</div>
				</header>
				<div className="post-detail-view--container">
					{loading ? <Loading /> : null}
					{error ? <LoadError /> : null}
					{data && comments ? <PostDetail data={data} comments={comments} /> : null}
				</div>
				<button type="button" className="sr-only"
					onFocus={(event) => {
						this.modalRef.current.scrollTo(0,0);
						this.modalCloseBtnRef.current.focus();
					}}>reset focus</button>
			</div>
		);
	}
}

export default withRouter(PostDetailView);
