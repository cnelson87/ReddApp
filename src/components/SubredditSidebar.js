import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import numeralDecimalAbbr from '../utilities/numeralDecimalAbbr';

function SubredditSidebar(props) {
	// console.log(props.data);
	const { accounts_active, subscribers, public_description, display_name, icon_img, title } = props.data;
	const _active = numeralDecimalAbbr(accounts_active);
	const _subscribers = numeralDecimalAbbr(subscribers);

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
					<Link to={'/r/' + display_name}>r/{display_name}</Link>
				</h3>
				{public_description ?
					<div className="sidebar--description">
						<p>{public_description}</p>
					</div>
				: null}
				<div className="sidebar--stats-row">
					<div className="sidebar--stats-col">
						<div><strong>{_subscribers}</strong></div>
						<div className="small">Subscribers</div>
					</div>
					<div className="sidebar--stats-col">
						<div><strong>{_active}</strong></div>
						<div className="small">Online</div>
					</div>
				</div>
			</div>
		</aside>
	)
}

SubredditSidebar.propTypes = {
	data: PropTypes.object.isRequired
};

export default SubredditSidebar;
