import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ToggleSwitch from '../components/ToggleSwitch';
import redditAlien from '../images/redditAlien.svg';
import redditLogo from '../images/redditLogo.svg';

function AppHeader() {

	return (
		<header className="app-header">
			<div className="app-header--container">
				<div className="app-header--column">
					<Link to="/" className="app-logo">
						<img src={redditAlien} className="reddit-alien" alt="" />
						<img src={redditLogo} className="reddit-logo" alt="reddit" />
					</Link>
				</div>
				<div className="app-header--column">
					<NavLink className="main-nav-link" activeClassName="active" to="/r/popular">Popular</NavLink>
					&nbsp;
					<NavLink className="main-nav-link" activeClassName="active" to="/r/all">All</NavLink>
				</div>
				<div className="app-header--column toggle-column">
					<ToggleSwitch label={"Show NSFW"} />
				</div>
				<div className="app-header--column toggle-column">
					<ToggleSwitch label={"Dark Theme"} />
				</div>
				<div className="app-header--column title-column">
					<h1>Welcome to ReddApp</h1>
				</div>
			</div>
		</header>
	)
}

export default AppHeader;
