import React from "react";
import classes from "./Goals.module.scss";

const Goals = (props) => {
	return (
		<section className={classes.Goals}>
			<h5>Направление тренировок:</h5>
			<ul>
				{props.goals.map((goal, i) => (
					<li key={i}>
						<p>* {goal}</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Goals;
