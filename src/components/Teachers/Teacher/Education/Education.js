import React from "react";
import classes from "./Education.module.scss";

const Education = (props) => (
	<section className={classes.Education}>
		<h5>Обучение:</h5>
		<ul>
			{props.education.map((cours, i) => (
				<li key={i}>
					<h4>{cours.cours}</h4>
					<ul>
						{cours.certificates.map((cert, i) => (
							<li key={i}>
								<p>- {cert}</p>
							</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	</section>
);

export default Education;
