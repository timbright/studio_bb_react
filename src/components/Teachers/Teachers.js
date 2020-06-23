import React from "react";

import classes from "./Teachers.module.scss";
import Teacher from "./Teacher/Teacher";

import { TEACHERS as teachers } from "../../appData";

const Teachers = () => {
	return (
		<ul className={classes.Teachers}>
			{teachers.map((teacher) => (
				<Teacher
					key={teacher.name + 1}
					name={teacher.name}
					title={teacher.title}
					src={teacher.src}
					alt={teacher.alt}
					since={teacher.since}
					description={teacher.description}
					education={teacher.education}
					goals={teacher.goals}
				/>
			))}
		</ul>
	);
};

export default Teachers;
