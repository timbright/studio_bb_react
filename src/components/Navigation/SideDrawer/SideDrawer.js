import React from "react";

import NavigationItems from "../../Navigation/Toolbar/NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.scss";

const sideDrawer = (props) => {
	let attachedClasses = [classes.SideDrawer, classes.Close];
	if (props.open) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}
	return (
		<nav className={attachedClasses.join(" ")}>
			<NavigationItems close={props.closed} hover={props.hover} />
		</nav>
	);
};

export default sideDrawer;
