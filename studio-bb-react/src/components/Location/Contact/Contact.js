import React from "react";
import classes from "./Contact.module.scss";
import sprite from "../../../assets/svg/sprite.svg";
import { CONTACT } from "../../../appData";

const Contact = (props) => {
	const { flag } = props;
	const {
		link,
		location,
		hrefTel,
		tel,
		hrefMail,
		mail,
		weekdaysHours,
		saturdayHours,
		sundayHours,
	} = CONTACT;
	return (
		<section className={classes.Contact}>
			<ul>
				<li>
					<a href={link}>
						<svg width="64" height="64" viewBox="0 0 512 512">
							<use href={sprite + "#location"}></use>
						</svg>
						<span>{location}</span>
					</a>
				</li>
				<li>
					<a href={hrefTel}>
						<svg width="64" height="64" viewBox="0 0 512 512">
							<use href={sprite + "#telephone"}></use>
						</svg>
						<span>{tel}</span>
					</a>
				</li>
				<li>
					<a href={hrefMail}>
						<svg width="64" height="64" viewBox="0 0 512 512">
							<use href={sprite + "#mail"}></use>
						</svg>
						<span>{mail}</span>
					</a>
				</li>
				{flag ? (
					<li>
						<svg width="64" height="64" viewBox="0 0 512 512">
							<use href={sprite + "#clock"}></use>
						</svg>
						<div>
							<p>{weekdaysHours}</p>
							<p>{saturdayHours}</p>
							<p>{sundayHours}</p>
						</div>
					</li>
				) : null}
			</ul>
		</section>
	);
};

export default Contact;
