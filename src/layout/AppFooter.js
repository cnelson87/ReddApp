import React from 'react';
import textStrings from 'config/textStrings';

function AppFooter() {

	return (
		<footer className="app-footer">
			<div className="app-footer--container">
				<div className="app-footer--column">
					<p>{textStrings.appFootnote}</p>
				</div>
			</div>
		</footer>
	);
}

export default AppFooter;
