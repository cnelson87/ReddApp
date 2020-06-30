import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Constants from 'config/Constants';
import AppLayout from 'layout/AppLayout';
import PostDetailView from 'views/PostDetailView';
import SubredditPageView from 'views/SubredditPageView';
import UserPageView from 'views/UserPageView';

const { defaultSubreddit } = Constants;
const redirectTo = `/r/${defaultSubreddit}`;

class App extends React.Component {

	render() {
		return (
			<AppLayout>
				<main className="app-main">
					<div className="app-main--container transition-container">
						<Switch>
							<Route path="/r/:subreddit/comments/:id/:stub/" component={PostDetailView} />
							<Route path="/r/:subreddit" render={(props) => {
								const { subreddit } = props.match.params;
								return (
									<SubredditPageView key={subreddit} {...props} />
								)
							}} />
							<Route path="/user/:user" render={(props) => {
								const { user } = props.match.params;
								return (
									<UserPageView key={user} {...props} />
								)
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
