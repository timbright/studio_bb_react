import React from "react";
import classes from "./Banner.module.scss";
import bannerImg from "../../assets/png/let's_do.png";

const Banner = () => {
	return (
		<section className={classes.Banner}>
			<h2>Добро пожаловать в Пилатес студию Body Balance</h2>
			<div>
				<img src={bannerImg} alt="let's do Pilates" />
			</div>
		</section>
	);
};

export default Banner;
