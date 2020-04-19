import React, { useContext } from "react";
import classes from "./CarouselBox.module.scss";
import { ImageContext } from "../../../context/carousel/Image/imageContext";

import firstStudioImg from "../../../assets/jpg/studio-1.jpg";
import secondStudioImg from "../../../assets/jpg/studio-2.jpg";
import thirdStudioImg from "../../../assets/jpg/studio-3.jpg";
import fourthStudioImg from "../../../assets/jpg/studio-4.jpg";

const images = [
	{ src: firstStudioImg, className: classes.hide },
	{ src: secondStudioImg, className: classes.hide },
	{ src: thirdStudioImg, className: classes.hide },
	{ src: fourthStudioImg, className: classes.view },
];

const CarouselBox = () => {
	const { reset, change, slider } = useContext(ImageContext);

	const changeItem = (items) => {
		const interval = window.setInterval(() => {
			const addHideClass = () => {
				items.forEach((item) => {
					item.className = classes.hide;
				});
			};

			if (slider.currentItem + 1 >= items.length) {
				reset();
				addHideClass();
			} else {
				change();
				addHideClass();
			}

			window.clearInterval(interval);

			items[slider.currentItem].className = classes.view;
		}, 10000);
		return items;
	};

	const renderSliders = (items) => {
		return changeItem(items).map((item, index) => {
			return (
				<li key={index}>
					<img src={item.src} alt="photoStudio" className={item.className} />
				</li>
			);
		});
	};

	return (
		<>
			<section className={classes.CarouselBox}>
				<ul>{renderSliders(images)}</ul>
			</section>
		</>
	);
};

export default CarouselBox;
