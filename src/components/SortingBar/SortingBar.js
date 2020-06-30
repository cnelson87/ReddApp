import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './SortingBar.scss';

const propTypes = {
	navRoot: PropTypes.string.isRequired,
	sortingParams: PropTypes.array.isRequired,
};

function SortingBar(props) {
	const { navRoot, sortingParams } = props;

	return (
		<div className="sorting-bar">
			sort:
			{sortingParams.map((sort) => {
				const linkTo = `${navRoot}/${sort}`;
				return (
					<NavLink key={sort} to={linkTo} className="sorting-bar--link" activeClassName="active">{sort}</NavLink>
				);
			})}
		</div>
	);
}

SortingBar.propTypes = propTypes;

export default SortingBar;
