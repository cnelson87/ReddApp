import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdDateRange } from 'react-icons/md';
import momentLocalDate from 'utilities/momentLocalDate';
import numeralDecimalAbbr from 'utilities/numeralDecimalAbbr';
import './Sidebar.scss';

const propTypes = {
	data: PropTypes.object.isRequired
};

function SubredditSidebar(props) {
	console.log(props.data);
	const { accounts_active, subscribers, created_utc, public_description, display_name, icon_img, title } = props.data;
	const _active = accounts_active ? numeralDecimalAbbr(accounts_active) : null;
	const _subscribers = subscribers ? numeralDecimalAbbr(subscribers) : null;
	const _created_utc = momentLocalDate(created_utc);

	return (
		<aside className="sidebar">
			<div className="sidebar--content">
				<h2>{title}</h2>
				<h3>
					{icon_img ? <img src={icon_img} className="sidebar--icon-img" alt="" /> : null}
					<Link to={'/r/' + display_name}>r/{display_name}</Link>
				</h3>
				{public_description ?
					<div className="sidebar--description">
						<p>{public_description}</p>
					</div>
				: null}
				<div className="sidebar--stats-row">
					{_subscribers ?
						<div className="sidebar--stats-col">
							<div><strong>{_subscribers}</strong></div>
							<div className="small">Subscribers</div>
						</div>
					: null}
					{_active ?
						<div className="sidebar--stats-col">
							<div><strong>{_active}</strong></div>
							<div className="small">Online</div>
						</div>
					: null}
				</div>
				<hr />
				<div className="sidebar--created">
					<MdDateRange className="icon" /> <span className="small">Created {_created_utc}</span>
				</div>
			</div>
		</aside>
	);
}

SubredditSidebar.propTypes = propTypes;

export default SubredditSidebar;
