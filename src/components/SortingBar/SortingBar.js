import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './SortingBar.module.scss';

function SortingBar({ navRoot, sortingParams }) {

	return (
		<div className={styles.component}>
			sort:
			{sortingParams.map((sort) => {
				const linkTo = `${navRoot}/${sort}`;
				return (
					<NavLink key={sort} to={linkTo} activeClassName="active">{sort}</NavLink>
				);
			})}
		</div>
	);
}

SortingBar.propTypes = {
	navRoot: PropTypes.string.isRequired,
	sortingParams: PropTypes.array.isRequired,
};

export default SortingBar;
