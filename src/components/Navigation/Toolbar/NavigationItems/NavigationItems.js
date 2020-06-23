import React from "react";

import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";

const navigationItems = (props) => {
	const submenu = <DropdownMenu close={props.close} />;
	return (
		<ul className={classes.NavigationItems}>
			<NavigationItem link="/" exact clicked={props.close}>
				Главная
			</NavigationItem>
			<NavigationItem link="/studio" clicked={props.close}>
				Студия
			</NavigationItem>
			<NavigationItem link="/our-teachers" clicked={props.close}>
				Преподаватели
			</NavigationItem>
			<NavigationItem
				link="#"
				clicked={props.close}
				submenu={submenu}
				dropdown
				notActive
			>
				Классы
			</NavigationItem>
			<NavigationItem link="/schedule" clicked={props.close}>
				Расписание
			</NavigationItem>
			<NavigationItem link="/contacts" clicked={props.close}>
				Контакты
			</NavigationItem>
		</ul>
	);
};

export default navigationItems;
