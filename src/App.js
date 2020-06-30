import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Constants from 'config/Constants';
import AppLayout from 'layout/AppLayout';
import PostDetailView from 'views/PostDetailView/PostDetailView';
import SubredditPageView from 'views/SubredditPageView';
import UserPageView from 'views/UserPageView';

const { defaultSubreddit } = Constants;
const redirectTo = `/r/${defaultSubreddit}`;

class App extends React.Component {

	constructor(props) {
		super(props);
		this.previousLocation = this.props.location;
	}

	componentWillUpdate() {
		let { location } = this.props;
		if (!(location.state && location.state.modal)) {
			this.previousLocation = location;
		}
	}

	render() {
		const { location } = this.props;
		const isModal = (
			location.state &&
			location.state.modal &&
			this.previousLocation !== location
		);

		return (
			<AppLayout>
				<Route path="/r/:subreddit/comments/:id/:stub/" render={(props) => {
					return (
						<PostDetailView isModal={isModal} {...props} />
					);
				}} />
				<main className="app-main">
					<div className="app-main--container transition-container">
						{/**/}
						<Switch location={isModal ? this.previousLocation : location}>
							<Route path="/r/:subreddit" render={(props) => {
								const { subreddit } = props.match.params;
								return (
									<SubredditPageView key={subreddit} {...props} />
								);
							}} />
							<Route path="/user/:user" render={(props) => {
								const { user } = props.match.params;
								return (
									<UserPageView key={user} {...props} />
								);
							}} />
							<Redirect to={redirectTo} />
						</Switch>
					</div>
				</main>
			</AppLayout>
		);
	}
}

export default withRouter(App);
