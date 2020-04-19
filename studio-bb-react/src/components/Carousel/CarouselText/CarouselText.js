import React, { useContext } from "react";
import classes from "./CarouselText.module.scss";
import { TextContext } from "../../../context/carousel/Text/textContext";

const quotes = [
	{
		text: `"Мы уходим на пенсию очень рано и умираем слишком молодыми. Расцвет жизни должен наступать в 70 лет, и только ближе к 100 — старость."`,
		className: classes.hide,
	},
	{
		text: `"Ум, который находится в здоровом теле, проявляется во всем блеске."`,
		className: classes.hide,
	},
	{
		text: `"Если в 30 лет ваш позвоночник потерял свою гибкость, вы старик. Если в 60 лет он гибок и подвижен, то вы молоды."`,
		className: classes.hide,
	},
	{
		text: ` "Через 10 занятий вы почувствуете разницу, через 20 — увидите разницу, а через 30 вы получите совершенно новое тело."`,
		className: classes.hide,
	},
	{
		text: `"Физическая активность — это первое условие счастья. Фитнес помогает получить здоровое тело и сильный ум и позволяет нам делать наши насущные дела легко, естественно и хорошо. И с удовольствием."`,
		className: classes.hide,
	},
	{
		text: `"Каждый момент в жизни может стать началом грандиозных перемен."`,
		className: classes.view,
	},
];

const CarouselText = () => {
	const { reset, change, slider } = useContext(TextContext);

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
				<li key={index} className={item.className}>
					<p>{item.text}</p>
					<p>Джозеф Пилатес</p>
				</li>
			);
		});
	};
	return (
		<>
			<section className={classes.CarouselText}>
				<ul>{renderSliders(quotes)}</ul>
			</section>
		</>
	);
};

export default CarouselText;
