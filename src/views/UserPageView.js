import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'config/axios';
import Constants from 'config/Constants';
import UserPostsListingContainer from 'containers/UserPostsListingContainer';
import SortingBar from 'components/SortingBar';
import UserSidebar from 'components/UserSidebar';

const { userPostsSorting, defaultUserPostsSort } = Constants;

class UserPageView extends React.Component {

	state = {
		sidebarData: null
	};

	getSidebarData(user) {
		const fetchUrl = `/user/${user}/about.json`;
		axios.get(fetchUrl)
			.then((response) => {
				// console.log('fetch response:', response);
				this.setState({
					sidebarData: response.data.data
				});
			}).catch((error) => {
				// console.log('fetch error:', error);
				this.setState({
					sidebarData: null
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
		const navRoot = `/user/${user}`;

		return (
			<div className="user-page-view react-transition fade-in">
				<SortingBar navRoot={navRoot} sortingParams={userPostsSorting} />
				<div className="two-column-layout">
					<div className="main-column">
						<Route path="/user/:user/:sort?" render={(props) => {
							const { user, sort = defaultUserPostsSort } = props.match.params;
							// props.match.params.sort = sort;
							return (
								<UserPostsListingContainer key={user + sort} user={user} sort={sort} {...props} />
							)
						}} />
					</div>
					<div className="sidebar-column">
						{sidebarData ? <UserSidebar data={sidebarData} /> : null}
					</div>
				</div>
			</div>
		);
	}
}

export default UserPageView;
