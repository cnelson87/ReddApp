import React from 'react';
import { Route } from 'react-router-dom';
import Constants from '../config/Constants';
import UserPostsListingContainer from '../containers/UserPostsListingContainer';
import UserPostsSorting from '../components/UserPostsSorting';
import UserSidebar from '../components/UserSidebar';
import '../styles/components/loading.scss';
import '../styles/components/sub-sorting.scss';
import '../styles/components/posts-listing.scss';
import '../styles/components/sidebar.scss';
import '../styles/components/load-more-cta.scss';
import '../styles/components/overlay-block.scss';

const { apiBaseUrl, defaultUserPostsSort } = Constants;

class UserView extends React.Component {

	state = {
		sidebarData: null,
		// error: false,
	};

	getSidebarData(user) {
		fetch(`${apiBaseUrl}/user/${user}/about.json`)
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					sidebarData: json.data
				});
			}).catch((error) => {
				// console.log('fetch error:', error);
				this.setState({
					sidebarData: {},
					// error: true
				});
			});
	}

	componentDidMount() {
		const { user } = this.props.match.params;
		this.getSidebarData(user);
	}

	render() {
		const { user } = this.props.match.params;
		const { sidebarData } = this.state;

		return (
			<div className="user-view">
				<UserPostsSorting user={user} />
				<div className="two-column-layout">
					<div className="main-column">
						<Route path="/u/:user/:sort?" render={(props) => {
							const { user, sort = defaultUserPostsSort } = props.match.params;
							// props.match.params.sort = sort;
							return (
								<UserPostsListingContainer key={user + sort} user={user} sort={sort} {...props} />
							)
						}} />
					</div>
					<div className="sidebar-column">
						{!sidebarData ? null : <UserSidebar data={sidebarData} />}
					</div>
				</div>
			</div>
		);
	}
}

export default UserView;
