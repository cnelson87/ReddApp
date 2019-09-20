import React from 'react';
import { Route } from 'react-router-dom';
import Constants from '../config/Constants';
import SubredditPostsListingContainer from '../containers/SubredditPostsListingContainer';
import SubredditPostsSorting from '../components/SubredditPostsSorting';
import SubredditSidebar from '../components/SubredditSidebar';
import allSidebarData from '../data/allSidebarData';
import popularSidebarData from '../data/popularSidebarData';
import '../styles/components/loading.scss';
import '../styles/components/sub-sorting.scss';
import '../styles/components/posts-listing.scss';
import '../styles/components/sidebar.scss';
import '../styles/components/load-more-cta.scss';
import '../styles/components/overlay-block.scss';

const { apiBaseUrl, defaultSubredditPostsSort } = Constants;

class SubredditView extends React.Component {

	state = {
		sidebarData: null,
		// error: false,
	};

	getSidebarData(subreddit) {
		fetch(`${apiBaseUrl}/r/${subreddit}/about.json`)
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
		} else if (subreddit === 'popular') {
			this.getPopularSidebarData();
		} else {
			this.getSidebarData(subreddit);
		}
	}

	render() {
		const { subreddit } = this.props.match.params;
		const { sidebarData } = this.state;

		return (
			<div className="subreddit-view">
				<SubredditPostsSorting subreddit={subreddit} />
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
						{!sidebarData ? null : <SubredditSidebar data={sidebarData} />}
					</div>
				</div>
			</div>
		);
	}
}

export default SubredditView;
