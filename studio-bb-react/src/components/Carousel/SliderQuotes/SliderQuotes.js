import React, { useState, useEffect } from "react";
import classes from "./SliderQuotes.module.scss";

const SliderQuotes = (props) => {
	const [counter, setCounter] = useState(0);
	const quotes = props.quotes;

	useEffect(() => {
		const interval = setInterval(() => {
			if (counter + 1 >= quotes.length) {
				setCounter((counter) => (counter = 0));
			} else {
				setCounter((counter) => counter + 1);
			}
		}, 6000);
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
				<li key={index} className={item.className}>
					<p>{item.text}</p>
					<p>Джозеф Пилатес</p>
				</li>
			);
		});
	};
	return (
		<>
			<section className={classes.SliderQuotes}>
				<ul>{renderSliders(quotes)}</ul>
			</section>
		</>
	);
};

export default SliderQuotes;
