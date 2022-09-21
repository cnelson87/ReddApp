import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdDateRange } from 'react-icons/md';

import momentLocalDate from 'utilities/momentLocalDate';
import numeralDecimalAbbr from 'utilities/numeralDecimalAbbr';
import styles from './Sidebar.module.scss';

function SubredditSidebar({ data }) {
	const { accounts_active, subscribers, created_utc, public_description, display_name, icon_img, title } = data;
	const _active = accounts_active ? numeralDecimalAbbr(accounts_active) : null;
	const _subscribers = subscribers ? numeralDecimalAbbr(subscribers) : null;
	const _created_utc = created_utc ? momentLocalDate(created_utc) : null;

	return (
		<aside className={styles.sidebar}>
			<div className={styles.content}>
				<h2>{title}</h2>
				<h3>
					{icon_img ? (
						<img src={icon_img} className={styles.iconImg} alt="" />
					) : null}
					<Link to={'/r/' + display_name}>r/{display_name}</Link>
				</h3>
				{public_description ? (
					<div className={styles.description}>
						<p>{public_description}</p>
					</div>
				) : null}
				{_subscribers && _active ? (
					<div className={styles.statsRow}>
						<div className={styles.statsCol}>
							<div><strong>{_subscribers}</strong></div>
							<div className="small">Members</div>
						</div>
						<div className={styles.statsCol}>
							<div><strong>{_active}</strong></div>
							<div className="small">Online</div>
						</div>
					</div>
				) : null}
				{_created_utc ? (
					<>
						<hr />
						<div className={styles.footer}>
							<MdDateRange className="icon" /> <span className="small">Created {_created_utc}</span>
						</div>
					</>
				) : null}
			</div>
		</aside>
	);
}

SubredditSidebar.propTypes = {
	data: PropTypes.object.isRequired
};

export default SubredditSidebar;
