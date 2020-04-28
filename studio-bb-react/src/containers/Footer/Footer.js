import React from "react";
import classes from "./Footer.module.scss";
import sprite from "../../assets/svg/sprite.svg";
import Social from "../../components/Social/Social";
import Contact from "../../components/Location/Contact/Contact";

const Footer = () => (
	<footer className={classes.Footer}>
		<a href="https://www.bodybalance.kz">
			<svg width="291" height="121" viewBox="0 0 291.11 121">
				<use href={sprite + "#body_balance_logo"}></use>
			</svg>
		</a>
		<Social />
		{window.innerWidth >= 1280 && <Contact flag={false} />}
	</footer>
);

export default Footer;
