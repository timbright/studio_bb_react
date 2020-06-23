import React, { useState } from "react";
import styles from "./Slider.module.scss";
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
			item.className = styles.hide;
		});
		items[counter].className = styles.view;
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
			<section className={styles.container}>
				<ul>{renderSliders(pics)}</ul>
			</section>
		</>
	);
};

export default SliderPics;
