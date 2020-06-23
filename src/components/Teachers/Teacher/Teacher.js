import React from "react";
import classes from "./Teacher.module.scss";
import Education from "./Education/Education";
import Goals from "./Goals/Goals";

const Teacher = (props) => {
	return (
		<li className={classes.Teacher}>
			<h2>{props.name}</h2>
			<h3>{props.title}</h3>
			<img src={props.src} alt={props.alt} />
			<h4>Опыт работы c {props.since}</h4>
			<blockquote>{props.description}</blockquote>
			<div>
				<Education education={props.education} />
				<Goals goals={props.goals} />
			</div>
		</li>
	);
};

export default Teacher;
