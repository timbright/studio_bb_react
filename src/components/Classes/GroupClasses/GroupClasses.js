import React from "react";

import classes from "./GroupClasses.module.scss";

import { CLASSES } from "../../../appData";
import Lesson from "../Lesson/Lesson";

const GroupClasses = () => {
	const regular = CLASSES.regular;
	const special = CLASSES.special;
	return (
		<article className={classes.GroupClasses}>
			<h1 className="visually-hidden">Групповые классы</h1>
			<h2>{regular.head}</h2>
			<h3>{regular.note}</h3>
			<ul>
				{regular.classes.map((lesson) => (
					<Lesson
						key={lesson.name + 1}
						name={lesson.name}
						src={lesson.src}
						alt={lesson.alt}
						description={lesson.description}
					/>
				))}
			</ul>
			<h2>{special.head}</h2>
			<h3>{special.note}</h3>
			<ul>
				{special.classes.map((lesson) => (
					<Lesson
						key={lesson.name + 1}
						name={lesson.name}
						src={lesson.src}
						alt={lesson.alt}
						description={lesson.description}
					/>
				))}
			</ul>
		</article>
	);
};

export default GroupClasses;
