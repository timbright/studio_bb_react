import React from "react";
import classes from "./Map.module.scss";

const Map = (props) => {
	return (
		<section className={classes.Map}>
			<h2 className="visually-hidden">{props.head}</h2>
			<iframe
				title={props.map}
				src={props.src}
				width={props.width}
				height={props.height}
				frameBorder={props.frameborder}
			></iframe>
		</section>
	);
};

export default Map;
