import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import axios from 'config/axios';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import LoadError from 'components/LoadError/LoadError';
import Loading from 'components/Loading/Loading';
import PostDetail from 'components/PostDetail/PostDetail';
import styles from './PostDetailView.module.scss';

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
			<button type="button" className={`btn btn-sm ${styles.closeBtn}`} autoFocus={true} ref={this.modalCloseBtnRef}
				onClick={(event) => {
					event.preventDefault();
					this.closeView();
				}}>{isModal ? 'X CLOSE' : 'r/' + subreddit}</button>
		);

		return (
			<div className={styles.component} ref={this.modalRef} onKeyDown={(event) => {
				if (event.keyCode === 27) {
					this.closeView();
				}
			}}>
				<header className={styles.header}>
					<div className={styles.headerInner}>
						{closeBtn}
					</div>
				</header>
				<div className={styles.main}>
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

PostDetailView.propTypes = {
	isModal: PropTypes.bool.isRequired,
	history: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
};

export default withRouter(PostDetailView);
