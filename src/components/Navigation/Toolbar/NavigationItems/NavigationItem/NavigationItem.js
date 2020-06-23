import React from "react";

import classes from "./NavigationItem.module.scss";
import { NavLink, Link } from "react-router-dom";

const navigationItem = (props) => {
	let itemClasses = [classes.NavigationItem];
	if (props.dropdown) {
		itemClasses = [classes.Dropdown, classes.NavigationItem];
	}

	let link = (
		<NavLink
			to={props.link}
			activeClassName={classes.active}
			exact={props.exact}
			onClick={props.clicked}
		>
			{props.children}
		</NavLink>
	);

	if (props.notActive) {
		link = (
			<Link to={props.link} className={classes.notActive}>
				{props.children}
			</Link>
		);
	}

	return (
		<li className={itemClasses.join(" ")}>
			{link}
			{props.submenu}
		</li>
	);
};

export default navigationItem;
