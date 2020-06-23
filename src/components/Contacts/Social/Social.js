import React from "react";
import classes from "./Social.module.scss";
import sprite from "../../../assets/svg/sprite.svg";
import { SOCIAL } from "../../../appData";

const Social = (props) => {
	const { hrefFacebook, hrefInstagram } = SOCIAL;
	return (
		<ul className={classes.Social}>
			<li>
				<a href={hrefFacebook} title="facebook">
					<svg width="50" height="50" viewBox="0 0 512 512">
						<use href={sprite + "#facebook"}></use>
					</svg>
				</a>
			</li>
			<li>
				<a href={hrefInstagram} title="instagram">
					<svg width="50" height="50" viewBox="0 0 512 512">
						<use href={sprite + "#instagram"}></use>
					</svg>
				</a>
			</li>
		</ul>
	);
};

export default Social;
