import React from "react";
import classes from "./Lesson.module.scss";

const lesson = (props) => {
	let image = null;
	if (props.src) {
		image = <img src={props.src} alt={props.alt}></img>;
	}
	return (
		<li className={classes.Lesson}>
			{image}
			<h2>{props.name}</h2>
			<p>{props.description}</p>
		</li>
	);
};

export default lesson;
