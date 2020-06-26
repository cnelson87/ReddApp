import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'config/axios';
import Constants from 'config/Constants';
import SubredditPostsListingContainer from 'containers/SubredditPostsListingContainer';
import SortingBar from 'components/SortingBar';
import SubredditSidebar from 'components/SubredditSidebar';
import allSidebarData from 'data/allSidebarData';
import popularSidebarData from 'data/popularSidebarData';

const { subredditPostsSorting, defaultSubredditPostsSort } = Constants;

class SubredditView extends React.Component {

	state = {
		sidebarData: null,
	};

	getSidebarData(subreddit) {
		const fetchUrl = `/r/${subreddit}/about.json`;
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

	getAllSidebarData() {
		this.setState({
			sidebarData: allSidebarData
		});
	}

	getPopularSidebarData() {
		this.setState({
			sidebarData: popularSidebarData
		});
	}

	componentDidMount() {
		const { subreddit } = this.props.match.params;
		if (subreddit === 'all') {
			this.getAllSidebarData();
		}
		else if (subreddit === 'popular') {
			this.getPopularSidebarData();
		}
		else {
			this.getSidebarData(subreddit);
		}
	}

	render() {
		const { subreddit } = this.props.match.params;
		const { sidebarData } = this.state;
		const navRoot = `/r/${subreddit}`;

		return (
			<div className="subreddit-view react-transition fade-in">
				<SortingBar navRoot={navRoot} sortingParams={subredditPostsSorting} />
				<div className="two-column-layout">
					<div className="main-column">
						<Route path="/r/:subreddit/:sort?" render={(props) => {
							const { subreddit, sort = defaultSubredditPostsSort } = props.match.params;
							// props.match.params.sort = sort;
							return (
								<SubredditPostsListingContainer key={subreddit + sort} subreddit={subreddit} sort={sort} {...props} />
							)
						}} />
					</div>
					<div className="sidebar-column">
						{sidebarData ? <SubredditSidebar data={sidebarData} /> : null}
					</div>
				</div>
			</div>
		);
	}
}

export default SubredditView;
