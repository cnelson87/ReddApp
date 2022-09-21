import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import momentLocalDate from 'utilities/momentLocalDate';
import styles from './Sidebar.module.scss';

function UserSidebar({ data }) {
	const { name, icon_img, created_utc, total_karma } = data;
	const { title, public_description } = data.subreddit;
	const _icon_img = icon_img ? icon_img.split('?')[0] : null;
	const _total_karma = (total_karma).toLocaleString();
	const _created_utc = momentLocalDate(created_utc);

	return (
		<aside className={`${styles.sidebar} ${styles.userSidebar}`}>
			{_icon_img ? (
				<div className={styles.header}>
					<img src={_icon_img} className={styles.userIconImg} alt="" />
				</div>
			) : null}
			<div className={styles.content}>
				<h3>{title}</h3>
				<p><Link to={'/user/' + name}>u/{name}</Link></p>
				{public_description ? (
					<div className={styles.description}>
						<p>{public_description}</p>
					</div>
				) : null}
				<div className={styles.statsRow}>
					<div className={styles.statsCol}>
						<div><strong>Karma</strong></div>
						<div className="small">{_total_karma}</div>
					</div>
					<div className={styles.statsCol}>
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
