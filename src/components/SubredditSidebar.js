import React from 'react';
import PropTypes from 'prop-types';

function SubredditSidebar(props) {
	// console.log(props.data);
	const { public_description, display_name, icon_img, title } = props.data;

	return (
		<aside className="sidebar">
			<div className="sidebar--content">
				<h2>{title}</h2>
				<h3>
					{!icon_img ? null :
						<div className="sidebar--icon-img">
							<img src={icon_img} alt="" />
						</div>
					}
					{"r/" + display_name}
				</h3>
				{!public_description ? null :
					<div className="sidebar--description">
						<p>{public_description}</p>
					</div>
				}
			</div>
		</aside>
	)
}

SubredditSidebar.propTypes = {
	data: PropTypes.object.isRequired
};

export default SubredditSidebar;
