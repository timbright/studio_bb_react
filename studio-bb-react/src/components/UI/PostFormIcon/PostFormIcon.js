import React, { useContext } from "react";
import classes from "./IconMail.module.scss";
import Button from "../Button/Button";
import sprite from "../../../assets/svg/sprite.svg";
import { PostFormContext } from "../../../context/postForm/postFormContext";

const PostFormIcon = () => {
	const form = useContext(PostFormContext);
	const onOpenForm = () => {
		form.open();
	};

	return (
		//<Button className={classes.IconMail} onClick={onClickBtn}>
		<Button className={classes.IconMail} onClick={onOpenForm}>
			<svg width="64" height="64" viewBox="0 0 64 64">
				<use href={sprite + "#feedback-icon"}></use>
			</svg>
		</Button>
	);
};

export default PostFormIcon;
