import React from 'react';
import Constants from 'config/Constants';
import ScrollToTop from './ScrollToTop';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

class AppLayout extends React.Component {

	componentDidMount() {
		const htmlEl = document.documentElement;
		if (Constants.isIE11) {htmlEl.classList.add('ie11');}
		if (Constants.isEdge) {htmlEl.classList.add('edge');}
		if (Constants.isAndroid) {htmlEl.classList.add('android');}
		if (Constants.isIOS) {htmlEl.classList.add('ios');}
		if (Constants.hasTouch) {
			htmlEl.classList.add('touch');
		} else {
			htmlEl.classList.add('no-touch');
		}
	}

	render() {
		return (
			<div className="app">
				<ScrollToTop />
				<AppHeader />
				{this.props.children}
				<AppFooter />
			</div>
		);
	}
}

export default AppLayout;
