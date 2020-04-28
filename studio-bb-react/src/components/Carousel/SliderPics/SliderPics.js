import React, { useState } from "react";
import classes from "./SliderPics.module.scss";
import { useEffect } from "react";

const SliderPics = (props) => {
	const [counter, setCounter] = useState(0);
	const pics = props.pics;

	useEffect(() => {
		const interval = setInterval(() => {
			if (counter + 1 >= pics.length) {
				setCounter((counter) => (counter = 0));
			} else {
				setCounter((counter) => counter + 1);
			}
		}, 10000);
		return () => clearInterval(interval);
	});

	const changeItem = (items) => {
		items.forEach((item) => {
			item.className = classes.hide;
		});
		items[counter].className = classes.view;
		return items;
	};

	const renderSliders = (items) => {
		return changeItem(items).map((item, index) => {
			return (
				<li key={index}>
					<img src={item.src} alt={item.alt} className={item.className} />
				</li>
			);
		});
	};

	return (
		<>
			<section className={classes.SliderPics}>
				<ul>{renderSliders(pics)}</ul>
			</section>
		</>
	);
};

export default SliderPics;
