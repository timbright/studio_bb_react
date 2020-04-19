import React from "react";
import classes from "./Header.module.scss";
import sprite from "../../assets/svg/sprite.svg";
import IconPhone from "../../components/UI/IconPhone/IconPhone";
import IconMail from "../../components/UI/IconMail/IconMail";

const Header = () => (
	<header className={classes.Header}>
		<IconPhone />
		<IconMail />
		<a href="https://www.bodybalance.kz">
			<svg width="291" height="121" viewBox="0 0 291.11 121">
				<use href={sprite + "#body_balance_logo"}></use>
			</svg>
		</a>
	</header>
);
export default Header;
