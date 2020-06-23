import React from "react";
import classes from "./DrawerToggle.module.scss";

const drawerToggle = (props) => {
	const attachedClasses = [classes.DrawerToggle, "fa"];

	if (props.open) {
		attachedClasses.push("fa-times");
		attachedClasses.push(classes.open);
	} else {
		attachedClasses.push("fa-bars");
	}
	return <i className={attachedClasses.join(" ")} onClick={props.clicked} />;
};

export default drawerToggle;
