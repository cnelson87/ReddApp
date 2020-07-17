import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'config/axios';
import NSFWToggleSwitchContainer from 'containers/NSFWToggleSwitchContainer';
import ThemeToggleSwitchContainer from 'containers/ThemeToggleSwitchContainer';
import compare from 'utilities/compare';
import planetIcon from 'assets/images/planetIcon.svg';

// params copied from Live
const params = 'redditWebClient=mweb2x&layout=classic&sort=default&limit=100&sr_detail=true&api_type=json&raw_json=1&app=2x-client-production';

class AppMenu extends React.Component {

	state = {
		data: [],
		loading: false,
		error: null,
	};

	getData() {
		const fetchUrl = `/subreddits/default.json?${params}`;
		this.setState({loading: true}, () => {
			axios.get(fetchUrl)
				.then((response) => {
					// console.log('fetch response:', response);
					const { children } = response.data.data;
					children.sort( compare );
					this.setState({
						data: children,
						loading: false,
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

	componentDidMount() {
		this.getData();
	}

	render() {
		const { menuOpen } = this.props;
		const { data, loading, error } = this.state;
		// console.log(data);

		if (error || loading) {
			return null;
		}

		return (
			<nav className={menuOpen ? 'app-menu open' : 'app-menu'}>
				<div className="app-menu--container">
					<div className="app-menu--header">
						<div className="app-menu--header-column">
							<NSFWToggleSwitchContainer />
						</div>
						<div className="app-menu--header-column">
							<ThemeToggleSwitchContainer />
						</div>
					</div>
					{data.map((item) => {
						const { id, url, icon_img, community_icon, display_name_prefixed, key_color } = item.data;
						return (
							<div key={id} className="app-menu--nav-item">
								<Link to={url} className="app-menu--nav-link">
									<span className={'app-menu--nav-link-icon' + (!icon_img && !community_icon ? ' planet-icon' : '')} style={key_color ? {backgroundColor: key_color} : null}>
										{icon_img ? <img src={icon_img} alt="" /> : null}
										{!icon_img && community_icon ? <img src={community_icon} alt="" /> : null}
										{!icon_img && !community_icon ? <img src={planetIcon} alt="" /> : null}
									</span>
									{display_name_prefixed}
								</Link>
							</div>
						);
					})}
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return {
		menuOpen: state.menuOpen
	};
}

export default connect(mapStateToProps)(AppMenu);
