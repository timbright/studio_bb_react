import React from "react";
import classes from "./Header.module.scss";
import sprite from "../../assets/svg/sprite.svg";
import IconPhone from "../../components/UI/IconPhone/IconPhone";
import IconPostForm from "../../components/UI/PostFormIcon/PostFormIcon";
import Phone from "../../components/UI/Phone/Phone";

const Header = () => {
	return (
		<header className={classes.Header}>
			{window.innerWidth <= 1280 && (
				<>
					<IconPhone />
					<IconPostForm />
				</>
			)}
			{window.innerWidth >= 1280 && (
				<Phone href={"tel:+77007777777"} tel={"+7 (700) 777-77-77"} />
			)}
			<a href="https://www.bodybalance.kz">
				<svg width="291" height="121" viewBox="0 0 291.11 121">
					<use href={sprite + "#body_balance_logo"}></use>
				</svg>
			</a>
		</header>
	);
};
export default Header;
