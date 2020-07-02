import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { MdMenu, MdClose } from 'react-icons/md';
import AppMenu from './AppMenu';
import NSFWToggleSwitchContainer from 'containers/NSFWToggleSwitchContainer';
import ThemeToggleSwitchContainer from 'containers/ThemeToggleSwitchContainer';
import { toggleMenu } from 'store/actions/menu';
import redditAlien from 'assets/images/redditAlien.svg';
import redditLogo from 'assets/images/redditLogo.svg';

function AppHeader(props) {
	const { menuOpen, toggleMenu } = props;

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
					<button type="button" className="btn icon-btn" onClick={toggleMenu}>
						{menuOpen ? <MdClose className="icon" /> : <MdMenu className="icon" />}
					</button>
				</div>
			</div>
			<AppMenu />
		</header>
	);
}

function mapStateToProps(state) {
	return {
		menuOpen: state.menuOpen
	};
}

function mapDispatchToProps(dispatch) {
	return {
		toggleMenu: () => dispatch(toggleMenu())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
