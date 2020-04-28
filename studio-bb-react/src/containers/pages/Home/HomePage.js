import React from "react";
import classes from "./HomePage.module.scss";
import SliderPics from "../../../components/Carousel/SliderPics/SliderPics";
import SliderQuotes from "../../../components/Carousel/SliderQuotes/SliderQuotes";
import SlideBlocks from "../../../components/SlideBlocks/SlideBlocks";
import Banner from "../../../components/Banner/Banner";
import Contact from "../../../components/Location/Contact/Contact";
import Map from "../../../components/Location/Map/Map";

import firstStudioImg from "../../../assets/jpg/studio-1.jpg";
import secondStudioImg from "../../../assets/jpg/studio-2.jpg";
import thirdStudioImg from "../../../assets/jpg/studio-3.jpg";
import fourthStudioImg from "../../../assets/jpg/studio-4.jpg";

const pics = [
	{ src: firstStudioImg, alt: "photoStudio", className: "" },
	{ src: secondStudioImg, alt: "photoStudio", className: "" },
	{ src: thirdStudioImg, alt: "photoStudio", className: "" },
	{ src: fourthStudioImg, alt: "photoStudio", className: "" },
];

const quotes = [
	{
		text: `"Мы уходим на пенсию очень рано и умираем слишком молодыми. Расцвет жизни должен наступать в 70 лет, и только ближе к 100 — старость."`,
		className: "",
	},
	{
		text: `"Ум, который находится в здоровом теле, проявляется во всем блеске."`,
		className: "",
	},
	{
		text: `"Если в 30 лет ваш позвоночник потерял свою гибкость, вы старик. Если в 60 лет он гибок и подвижен, то вы молоды."`,
		className: "",
	},
	{
		text: ` "Через 10 занятий вы почувствуете разницу, через 20 — увидите разницу, а через 30 вы получите совершенно новое тело."`,
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
];

const HomePage = () => (
	<section className={classes.HomeContainer}>
		<h1 className="visually-hidden">Home</h1>
		<SliderPics pics={pics} />
		<Banner />
		<SlideBlocks />
		<SliderQuotes quotes={quotes} />
		<div>
			{window.innerWidth <= 1280 && <Contact flag />}
			{window.innerWidth <= 1280 && <Map />}
		</div>
	</section>
);

export default HomePage;
