import React from "react";
import classes from "./Teachers.module.scss";
import dianaImg from "../../assets/jpg/avatar_mocs.jpg";
import loremImg from "../../assets/jpg/avatar_mocs.jpg";

const teachers = [
	{
		name: "Диaнa",
		degree: "Мастер-тренер",
		src: dianaImg,
		alt: "teacher",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		name: "Lorem",
		degree: "Инструктор",
		src: loremImg,
		alt: "teacher",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
];

export const Teachers = () => {
	const renderTeachers = (items) => {
		return items.map((item, index) => {
			return (
				<li key={index}>
					<div>
						<h2>{item.name}</h2>
						<img src={item.src} alt={item.alt} width="200" height="200" />
					</div>
					<div>
						<h3>{item.degree}</h3>
						<p>{item.text}</p>
					</div>
				</li>
			);
		});
	};

	return <ul className={classes.Teachers}>{renderTeachers(teachers)}</ul>;
};
