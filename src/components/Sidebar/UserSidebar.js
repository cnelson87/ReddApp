import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import momentLocalDate from 'utilities/momentLocalDate';
import './Sidebar.scss';

function UserSidebar(props) {
	// console.log(props.data);
	const { name, icon_img, created_utc, comment_karma, link_karma } = props.data;
	const { public_description } = props.data.subreddit;
	const _icon_img = icon_img ? icon_img.split('?')[0] : null;
	const _created_utc = momentLocalDate(created_utc);
	const _karma_total = (comment_karma + link_karma).toLocaleString();

	return (
		<aside className="sidebar user-sidebar">
			{_icon_img ?
				<div className="user-sidebar--header">
					<img className="user-sidebar--icon-img" src={_icon_img} alt="" />
				</div>
			: null}
			<div className="sidebar--content">
				<h3>{name}</h3>
				<p><Link to={'/user/' + name}>u/{name}</Link></p>
				{public_description ?
					<div className="sidebar--description">
						<p>{public_description}</p>
					</div>
				: null}
				<div className="sidebar--stats-row">
					<div className="sidebar--stats-col">
						<div><strong>Karma</strong></div>
						<div className="small">{_karma_total}</div>
					</div>
					<div className="sidebar--stats-col">
						<div><strong>Joined</strong></div>
						<div className="small">{_created_utc}</div>
					</div>
				</div>
			</div>
		</aside>
	);
}

UserSidebar.propTypes = {
	data: PropTypes.object.isRequired
};

export default UserSidebar;
