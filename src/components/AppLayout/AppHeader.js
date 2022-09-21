import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

import AppMenu from './AppMenu';
import { setIsMenuOpen } from 'store/reducers/appVars';
import NSFWToggleSwitchContainer from 'containers/NSFWToggleSwitchContainer';
import ThemeToggleSwitchContainer from 'containers/ThemeToggleSwitchContainer';

const redditAlien = '/images/redditAlien.svg';
const redditLogo = '/images/redditLogo.svg';

function AppHeader() {
	const dispatch = useDispatch();
	const { isMenuOpen } = useSelector((state) => state.appVars);

	const handleToggleMenuClick = () => {
		dispatch(setIsMenuOpen(!isMenuOpen));
	};

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
					<NSFWToggleSwitchContainer />
				</div>
				<div className="app-header--column toggle-column">
					<ThemeToggleSwitchContainer />
				</div>
				<div className="app-header--column menu-column">
					<button type="button" className="btn icon-btn" onClick={handleToggleMenuClick}>
						{isMenuOpen ? <MdClose className="icon" /> : <MdMenu className="icon" />}
					</button>
				</div>
			</div>
			<AppMenu />
		</header>
	);
}

export default AppHeader;
