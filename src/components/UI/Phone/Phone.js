import React from "react";
import classes from "./Phone.module.scss";

const Phone = (props) => (
	<div className={classes.Phone}>
		<a href={props.href}>
			<span>{props.tel}</span>
		</a>
	</div>
);

export default Phone;
