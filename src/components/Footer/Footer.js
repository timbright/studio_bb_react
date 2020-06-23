import React from "react";
import classes from "./Footer.module.scss";
import sprite from "../../assets/svg/sprite.svg";
import Social from "../Contacts/Social/Social";
import Contact from "../Contacts/Contact/Contact";

const Footer = () => {
	let contactBlock = null;
	if (window.innerWidth >= 1280) {
		contactBlock = <Contact hours={false} />;
	}
	return (
		<footer className={classes.Footer}>
			<a href="https://www.bodybalance.kz">
				<svg
					className={classes.logo}
					width="291"
					height="121"
					viewBox="0 0 291.11 121"
				>
					<use href={sprite + "#body_balance_logo"}></use>
				</svg>
			</a>
			<Social />
			{contactBlock}
		</footer>
	);
};

export default Footer;
