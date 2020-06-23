import React from "react";

import classes from "./PrivateClasses.module.scss";
import { CLASSES } from "../../../appData";
import Lesson from "../Lesson/Lesson";

const PrivateClasses = () => {
	const personal = CLASSES.private;
	return (
		<article className={classes.PrivateClasses}>
			<h1 className="visually-hidden">Персональные классы</h1>
			<h2>{personal.head}</h2>
			<h3>{personal.note}</h3>
			<p>{personal.description}</p>
			<ul>
				{personal.classes.map((lesson) => (
					<Lesson
						key={lesson.name + 1}
						name={lesson.name}
						src={lesson.src}
						alt={lesson.alt}
						description={lesson.description}
					/>
				))}
			</ul>
			<p>{personal.text}</p>
		</article>
	);
};
export default PrivateClasses;
