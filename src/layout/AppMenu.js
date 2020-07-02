import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'config/axios';
import Constants from 'config/Constants';
import NSFWToggleSwitchContainer from 'containers/NSFWToggleSwitchContainer';
import ThemeToggleSwitchContainer from 'containers/ThemeToggleSwitchContainer';

const { postsLimit } = Constants;

function compare( a, b ) {
	if ( a.data.display_name.toLowerCase() < b.data.display_name.toLowerCase() ) {
		return -1;
	}
	if ( a.data.display_name.toLowerCase() > b.data.display_name.toLowerCase() ) {
		return 1;
	}
	return 0;
}

class AppMenu extends React.Component {

	state = {
		data: [],
		loading: false,
		error: null,
	};

	getData() {
		const fetchUrl = `/subreddits/default.json?sr_detail=false&limit=${postsLimit}`;
		this.setState({loading: true}, () => {
			axios.get(fetchUrl)
				.then((response) => {
					const { children } = response.data.data;
					children.sort( compare );
					// console.log(data);
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
					{data.map((item) => (
						<div key={item.data.id} className="app-menu--nav-item">
							<Link to={item.data.url} className="app-menu--nav-link">
								<span className="app-menu--nav-link-icon">
									{item.data.icon_img ? <img src={item.data.icon_img} alt="" /> : null}
								</span>
								r/{item.data.display_name}
							</Link>
						</div>
					))}
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
