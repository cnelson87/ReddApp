import React from 'react';

function AppFooter() {

	return (
		<footer className="app-footer">
			<div className="app-footer--container">
				<div className="app-footer--column">
					<p>
						ReddApp by chris.nelson@wearepop.com
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
	)
}

export default AppFooter;
