import React from "react";
import NavigationItem from "../Toolbar/NavigationItems/NavigationItem/NavigationItem";

import classes from "./DropdownMenu.module.scss";

const Dropdown = (props) => (
	<ul className={classes.DropdownMenu}>
		<NavigationItem link="/group-classes" clicked={props.close}>
			Групповые классы
		</NavigationItem>
		<NavigationItem link="/private-classes" clicked={props.close}>
			Персональные классы
		</NavigationItem>
	</ul>
);

export default Dropdown;
