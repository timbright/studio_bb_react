import React from "react";
import classes from "./Alert.module.scss";

const Alert = (props) => {
	const { error, success } = props;
	if (!error && !success) return null;

	let attachedClasses = [classes.Alert, classes.Success];
	if (error) {
		attachedClasses = [classes.Alert, classes.Error];
	}

	return (
		<section className={attachedClasses.join(" ")}>
			<div>{success ? success.note : error.typeError}</div>
			<p>{success ? success.text : error.text}</p>
		</section>
	);
};

export default Alert;
