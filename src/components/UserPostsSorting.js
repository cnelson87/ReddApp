import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Constants from '../config/Constants';
import '../styles/components/sub-sorting.scss';

const { userPostsSorting } = Constants;

function UserPostsSorting(props) {
	const { user } = props;

	return (
		<div className="sub-sorting">
			sort:
			{userPostsSorting.map((item) => {
				let linkTo = `/u/${user}/${item}`;
				return (
					<NavLink key={item} to={linkTo} className="sub-sorting-link" activeClassName="active">{item}</NavLink>
				)
			})}
		</div>
	);
}

UserPostsSorting.propTypes = {
	user: PropTypes.string.isRequired,
};

export default UserPostsSorting;
