import React from "react";
import classes from "./Footer.module.scss";
import sprite from "../../assets/svg/sprite.svg";
import Social from "../../components/Social/Social";

const Footer = () => (
	<footer className={classes.Footer}>
		<a href="https://www.bodybalance.kz">
			<svg width="291" height="121" viewBox="0 0 291.11 121">
				<use href={sprite + "#body_balance_logo"}></use>
			</svg>
		</a>
		<Social
			hrefFacebook="https://www.facebook.com"
			hrefInstagram="https://www.instagram.com"
		/>
	</footer>
);

export default Footer;
