import React from "react";
import classes from "./PrivateClasses.module.scss";
import { PRIVATE_CLASSES } from "../../../appData";

const PrivateClasses = () => {
	const { headBasic, note, description, text, equipment } = PRIVATE_CLASSES;
	const renderClass = (items) => {
		return items.map((item, index) => {
			return (
				<li key={index}>
					<img src={item.src} alt={item.alt} width="200" height="200"></img>
					<h2>{item.title}</h2>
					<p>{item.description}</p>
				</li>
			);
		});
	};

	return (
		<>
			<h2>{headBasic}</h2>
			<p>{note}</p>
			<p>{description}</p>
			<ul className={classes.PrivateClass}>{renderClass(equipment)}</ul>
			<p>{text}</p>
		</>
	);
};

export default PrivateClasses;
