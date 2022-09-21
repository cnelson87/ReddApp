import React from 'react';

import Constants from 'config/Constants';
const { footnoteText } = Constants;

function AppFooter() {
	return (
		<footer className="app-footer">
			<div className="app-footer--container">
				<div className="app-footer--column">
					<p>{footnoteText}</p>
				</div>
			</div>
		</footer>
	);
}

export default AppFooter;
