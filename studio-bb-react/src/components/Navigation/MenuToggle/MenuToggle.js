import React from "react";
import classes from "./MenuToggle.module.scss";
//import { MainMenuContext } from "../../../context/mainMenu/mainMenuContext";

const MenuToggle = (props) => {
	const clss = [classes.MenuToggle, "fa"];

	if (props.isOpen) {
		clss.push("fa-times");
		clss.push(classes.open);
	} else {
		clss.push("fa-bars");
	}
	return <i className={clss.join(" ")} onClick={props.onToggle} />;
};

export default MenuToggle;
