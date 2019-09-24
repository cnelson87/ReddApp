import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

function UserSidebar(props) {
	// console.log(props.data);
	const { name, icon_img, created, comment_karma, link_karma } = props.data;
	const { public_description } = props.data.subreddit;
	const _icon_img = icon_img ? icon_img.split('?')[0] : null;
	const _joined = moment(created * 1000).format('LL');
	const _karma = (comment_karma + link_karma).toLocaleString();

	return (
		<aside className="sidebar user-sidebar">
			{_icon_img ?
				<div className="user-sidebar--header">
					<img className="user-sidebar--icon-img" src={_icon_img} alt="" />
				</div>
			: null}
			<div className="sidebar--content">
				<h3>{name}</h3>
				<p><Link to={'/u/' + name}>{'u/' + name}</Link></p>
				{public_description ?
					<div className="sidebar--description">
						<p>{public_description}</p>
					</div>
				: null}
				<p>
					karma: {_karma}<br />
					joined: {_joined}
				</p>
			</div>
		</aside>
	)
}

UserSidebar.propTypes = {
	data: PropTypes.object.isRequired
};

export default UserSidebar;
