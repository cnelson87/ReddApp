import React from 'react';
import Constants from 'config/Constants';

const { strings } = Constants;

function AppFooter() {

	return (
		<footer className="app-footer">
			<div className="app-footer--container">
				<div className="app-footer--column">
					<p>
						ReddApp by {strings.myEmail}
					</p>
				</div>
				<div className="app-footer--column">
					<a href="https://reactjs.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</div>
			</div>
		</footer>
	);
}

export default AppFooter;
