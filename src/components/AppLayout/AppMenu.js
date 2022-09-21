import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import axios from 'config/axios';
import NSFWToggleSwitchContainer from 'containers/NSFWToggleSwitchContainer';
import ThemeToggleSwitchContainer from 'containers/ThemeToggleSwitchContainer';
import compare from 'utilities/compare';

// params copied from Live
const params = 'redditWebClient=mweb2x&layout=classic&sort=default&limit=100&sr_detail=true&api_type=json&raw_json=1&app=2x-client-production';

const planetIcon = '/images/planetIcon.svg';

function AppMenu() {
	const { isMenuOpen } = useSelector((state) => state.appVars);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// on mount
	useEffect(() => {
		const fetchUrl = `/subreddits/default.json?${params}`;
		setLoading(true);

		axios.get(fetchUrl)
			.then((response) => {
				// console.log('fetch response:', response);
				const { children } = response.data.data;
				children.sort( compare );
				setLoading(false);
				setData(children);
			})
			.catch((error) => {
				// console.warn('fetch error:', error);
				setLoading(false);
				setError(error);
			});

	}, []);

	if (error || loading) {
		return null;
	}

	return (
		<nav className={isMenuOpen ? 'app-menu open' : 'app-menu'}>
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

export default AppMenu;
