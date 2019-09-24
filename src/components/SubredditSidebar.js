import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

function SubredditSidebar(props) {
	// console.log(props.data);
	const { accounts_active, subscribers, public_description, display_name, icon_img, title } = props.data;
	const _subscribers = subscribers ? numeral(subscribers).format('0.0a') : null;
	const _active = accounts_active ? numeral(accounts_active).format('0.0a') : null;

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
					<Link to={'/r/' + display_name}>{'r/' + display_name}</Link>
				</h3>
				{public_description ?
					<div className="sidebar--description">
						<p>{public_description}</p>
					</div>
				: null}
				<div className="sidebar--stats-row">
					{_subscribers ?
						<div className="sidebar--stats-col">
							<div className="sidebar--stat-num">{_subscribers}</div>
							<div className="sidebar--stat-lbl">Subscribers</div>
						</div>
					: null}
					{_active ?
						<div className="sidebar--stats-col">
							<div className="sidebar--stat-num">{_active}</div>
							<div className="sidebar--stat-lbl">Online</div>
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
