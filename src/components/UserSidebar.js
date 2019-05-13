import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

function UserSidebar(props) {
	// console.log(props.data);
	const { name, icon_img, created, comment_karma, link_karma } = props.data;
	const { public_description } = props.data.subreddit;
	const thumbnailImg = icon_img ? icon_img.split('?')[0] : null;
	const joined = moment(created * 1000).format('LL');
	const karma = (comment_karma + link_karma).toLocaleString();

	return (
		<aside className="sidebar user-sidebar">
			{!thumbnailImg ? null :
				<div className="user-sidebar--header">
					<img className="user-sidebar--icon-img" src={thumbnailImg} alt="" />
				</div>
			}
			<div className="sidebar--content">
				<h3>{name}</h3>
				<p><Link to={'/u/' + name}>u/{name}</Link></p>
				{!public_description ? null :
					<div className="sidebar--description">
						<p>{public_description}</p>
					</div>
				}
				<p>
					karma: {karma}<br />
					joined: {joined}
				</p>
			</div>
		</aside>
	)
}

UserSidebar.propTypes = {
	data: PropTypes.object.isRequired
};

export default UserSidebar;
