import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Constants from 'config/Constants';
import ScrollToTop from 'layout/ScrollToTop';
import AppHeader from 'layout/AppHeader';
import AppFooter from 'layout/AppFooter';
import PostDetailView from 'views/PostDetailView';
import SubredditPageView from 'views/SubredditPageView';
import UserPageView from 'views/UserPageView';

const { defaultSubreddit } = Constants;
const redirectTo = `/r/${defaultSubreddit}`;

class App extends React.Component {

	componentDidMount() {
		const htmlEl = document.documentElement;
		if (Constants.isIE11) {htmlEl.classList.add('ie11');}
		if (Constants.isEdge) {htmlEl.classList.add('edge');}
		if (Constants.isAndroid) {htmlEl.classList.add('android');}
		if (Constants.isIOS) {htmlEl.classList.add('ios');}
	}

	render() {
		return (
			<div className="app">
				<ScrollToTop />
				<AppHeader />
				<main className="app-main transition-container">
					<div className="app-main--container">
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
				<AppFooter />
			</div>
		);
	}
}

export default withRouter(App);
