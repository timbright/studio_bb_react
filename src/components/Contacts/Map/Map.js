import React from "react";
import classes from "./Map.module.scss";
import { MAP } from "../../../appData";

const Map = (props) => {
	const { head, title, src, width, height, frameborder } = MAP;
	return (
		<section className={classes.Map}>
			<h2 className="visually-hidden">{head}</h2>
			<iframe
				title={title}
				src={src}
				width={width}
				height={height}
				frameBorder={frameborder}
			></iframe>
		</section>
	);
};

export default Map;
