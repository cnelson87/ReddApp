import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Constants from 'config/Constants';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

function AppLayout(props) {
	const { isDarkTheme } = useSelector((state) => state.appVars);

	// on mount
	useEffect(() => {
		if (Constants.isAndroid) {document.documentElement.classList.add('android');}
		if (Constants.isIOS) {document.documentElement.classList.add('ios');}
	}, []);

	// on theme change
	useEffect(() => {
		if (isDarkTheme) {
			document.body.classList.add('dark-theme');
		} else {
			document.body.classList.remove('dark-theme');
		}
	}, [isDarkTheme]);

	return (
		<div className="app">
			<AppHeader />
			{props.children}
			<AppFooter />
		</div>
	);
}

AppLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AppLayout;
