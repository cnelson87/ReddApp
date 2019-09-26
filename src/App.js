import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Constants from './config/Constants';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import UserView from './views/UserView';
import PostDetailView from './views/PostDetailView';
import SubredditView from './views/SubredditView';

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
			<Router>
				<AppHeader />
				<main className="app-main">
					<div className="app-main--container">
						<Switch>
							<Route path="/r/:subreddit/comments/:id/:stub/" component={PostDetailView} />
							<Route path="/r/:subreddit" render={(props) => {
								const { subreddit } = props.match.params;
								return (
									<SubredditView key={subreddit} {...props} />
								)
							}} />
							<Route path="/u/:user" render={(props) => {
								const { user } = props.match.params;
								return (
									<UserView key={user} {...props} />
								)
							}} />
							<Redirect to={redirectTo} />
						</Switch>
					</div>
				</main>
				<AppFooter />
			</Router>
		);
	}
}

export default App;
