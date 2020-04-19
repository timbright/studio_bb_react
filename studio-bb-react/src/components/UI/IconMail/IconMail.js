import React from "react";
import classes from "./IconMail.module.scss";
import Button from "../Button/Button";
import sprite from "../../../assets/svg/sprite.svg";

const IconMail = () => {
	return (
		<Button className={classes.IconMail}>
			<svg width="64" height="64" viewBox="0 0 64 64">
				<use href={sprite + "#feedback-icon"}></use>
			</svg>
		</Button>
	);
};

export default IconMail;
