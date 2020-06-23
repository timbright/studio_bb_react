import React from "react";
import classes from "./Home.module.scss";
import SliderPics from "../Carousel/SliderPics/SliderPics";
import SliderQuotes from "../Carousel/Quotes/Quotes";
import SlideBlocks from "../SlideBlocks/SlideBlocks";
import Banner from "../Banner/Banner";
import Map from "../Contacts/Map/Map";
import firstStudioImg from "../../assets/jpg/studio-1.jpg";
import secondStudioImg from "../../assets/jpg/studio-2.jpg";
import thirdStudioImg from "../../assets/jpg/studio-3.jpg";
import fourthStudioImg from "../../assets/jpg/studio-4.jpg";

const pics = [
	{ src: firstStudioImg, alt: "photoStudio", className: "" },
	{ src: secondStudioImg, alt: "photoStudio", className: "" },
	{ src: thirdStudioImg, alt: "photoStudio", className: "" },
	{ src: fourthStudioImg, alt: "photoStudio", className: "" },
];

const quotes = [
	{
		text: `«Через десять занятий вы почувствуете разницу, через двадцать – увидите ее, а через тридцать – у вас будет совершенно новое тело»`,
		className: "",
	},
	{
		text: `«И никто не должен заботиться о ваших достижениях больше вас самих»`,
		className: "",
	},
	{
		text: `"Если в 30 лет ваш позвоночник потерял свою гибкость, вы старик. Если в 60 лет он гибок и подвижен, то вы молоды."`,
		className: "",
	},
	{
		text: ` «В идеале наши мышцы должны подчиняться нашей воле. Рефлекторные действия мышц не должны доминировать над нашим разумом»`,
		className: "",
	},
	{
		text: `"Физическая активность — это первое условие счастья. Фитнес помогает получить здоровое тело и сильный ум и позволяет нам делать наши насущные дела легко, естественно и хорошо. И с удовольствием."`,
		className: "",
	},
	{
		text: `"Каждый момент в жизни может стать началом грандиозных перемен."`,
		className: "",
	},
	{
		text: `«Даже если вы не следуете другим инструкциям - научитесь изначально правильно дышать»`,
		className: "",
	},
	{
		text: `«Здоровье - первая составляющая счастья»`,
		className: "",
	},
	{
		text: `«Все должно происходить гладко, как у кошки, чтобы избежать излишнего стресса для сердца и легких. Только естественные движения с акцентом на выполнение и присутствие»`,
		className: "",
	},
	{
		text: `«Ум, который находится здоровом теле, проявляется во всем блеске»`,
		className: "",
	},
	{
		text: `«Даже если вы не следуете другим инструкциям - научитесь изначально правильно дышать»`,
		className: "",
	},
];

const Home = () => {
	let map = null;
	let contact = null;

	if (window.innerWidth <= 1280) {
		map = <Map />;
	}

	return (
		<section className={classes.container}>
			<h1 className="visually-hidden">Home</h1>
			<SliderPics pics={pics} />
			<Banner />
			<SlideBlocks />
			<SliderQuotes quotes={quotes} />
			<div className={classes.location}>
				{contact}
				{map}
			</div>
		</section>
	);
};

export default Home;
