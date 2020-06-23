import React from "react";
import styles from "./Header.module.scss";
import sprite from "../../assets/svg/sprite.svg";
import IconPhone from "../../components/UI/IconPhone/IconPhone";
import Phone from "../../components/UI/Phone/Phone";
import DrawerToggle from "../Navigation/SideDrawer/DrawerToggle/DrawerToggle";

const Header = (props) => {
	let phone = null;
	let toggle = null;
	if (window.innerWidth <= 1280) {
		phone = <IconPhone />;
		toggle = (
			<DrawerToggle open={props.open} clicked={props.drawerToggleClicked} />
		);
	} else {
		phone = <Phone href={"tel:+77007777777"} tel={"+7 (700) 777-77-77"} />;
	}
	return (
		<header className={styles.header}>
			{phone}
			{toggle}
			<a href="https://www.bodybalance.kz">
				<svg width="291" height="121" viewBox="0 0 291.11 121">
					<use href={sprite + "#body_balance_logo"}></use>
				</svg>
			</a>
		</header>
	);
};
export default Header;
