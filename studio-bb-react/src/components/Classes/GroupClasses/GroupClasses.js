import React from "react";
import classes from "./GroupClasses.module.scss";
import { GROUP_CLASSES } from "../../../appData";

const GroupClasses = () => {
	const { headBasic, note, basic, headSpecial, special } = GROUP_CLASSES;

	const renderClasses = (items) => {
		return items.map((item, index) => {
			return (
				<li key={index}>
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
			<ul className={classes.GroupClass}>{renderClasses(basic)}</ul>
			<h2>{headSpecial}</h2>
			<p>{note}</p>
			<ul className={classes.GroupClass}>{renderClasses(special)}</ul>
		</>
	);
};

export default GroupClasses;
