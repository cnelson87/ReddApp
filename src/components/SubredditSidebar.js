import React from 'react';
import PropTypes from 'prop-types';

function SubredditSidebar(props) {
	// console.log(props.data);
	const { accounts_active, subscribers, public_description, display_name, icon_img, title } = props.data;

	return (
		<aside className="sidebar">
			<div className="sidebar--content">
				<h2>{title}</h2>
				<h3>
					{icon_img ?
						<div className="sidebar--icon-img">
							<img src={icon_img} alt="" />
						</div>
					: null}
					{"r/" + display_name}
				</h3>
				{public_description ?
					<div className="sidebar--description">
						<p>{public_description}</p>
					</div>
				: null}
				<div className="sidebar--stats-row">
					{subscribers ?
						<div className="sidebar--stats-col">
							<div>{subscribers}</div>
							<div>Subscribers</div>
						</div>
					: null}
					{accounts_active ?
						<div className="sidebar--stats-col">
							<div>{accounts_active}</div>
							<div>Online</div>
						</div>
					: null}
				</div>
			</div>
		</aside>
	)
}

SubredditSidebar.propTypes = {
	data: PropTypes.object.isRequired
};

export default SubredditSidebar;
