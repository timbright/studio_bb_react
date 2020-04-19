import React, { useContext } from "react";

import classes from "./MainMenu.module.scss";
import { NavLink } from "react-router-dom";
import MenuToggle from "../MenuToggle/MenuToggle";
import { MenuContext } from "../../../context/menu/menuContext";

const links = [
	{ to: "/", label: "Главная", exact: true },
	{ to: "/studio", label: "Студия", exact: false },
	{ to: "/teachers", label: "Преподаватели", exact: false },
	{ to: "/classes", label: "Классы", exact: false },
	{ to: "/schedule", label: "Расписание", exact: false },
	{ to: "/contacts", label: "Контакты", exact: false },
];

const MainMenu = () => {
	const { menu, toggle, close } = useContext(MenuContext);
	//	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

	const renderLinks = () => {
		return links.map((link, index) => {
			return (
				<li key={index}>
					<NavLink
						to={link.to}
						exact={link.exact}
						activeClassName={classes.active}
						onClick={close}
					>
						{link.label}
					</NavLink>
				</li>
			);
		});
	};

	const cls = [classes.MainMenu];

	if (menu.open) {
		cls.push(classes.open);
	}

	return (
		<>
			<MenuToggle onToggle={toggle} isOpen={menu.open} />
			<nav className={cls.join(" ")}>
				<ul>{renderLinks()}</ul>
			</nav>
		</>
	);
};

export default MainMenu;
