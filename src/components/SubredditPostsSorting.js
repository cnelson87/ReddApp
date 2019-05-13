import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Constants from '../config/Constants';

const { subredditPostsSorting } = Constants;

function SubredditPostsSorting(props) {
	const { subreddit } = props;
	return (
		<div className="sub-sorting">
			sort:
			{subredditPostsSorting.map((item) => {
				let linkTo = `/r/${subreddit}/${item}`;
				return (
					<NavLink key={item} to={linkTo} className="sub-sorting-link" activeClassName="active">{item}</NavLink>
				)
			})}
		</div>
	)
}

SubredditPostsSorting.propTypes = {
	subreddit: PropTypes.string.isRequired,
};

export default SubredditPostsSorting;
