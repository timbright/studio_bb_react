import React from "react";
import classes from "./HomePage.module.scss";
import CarouselBox from "../../../components/Carousel/CarouselImg/CarouselBox";
import CarouselText from "../../../components/Carousel/CarouselText/CarouselText";
import SlideBlocks from "../../../components/SlideBlocks/SlideBlocks";
import Banner from "../../../components/Banner/Banner";
import Contact from "../../../components/Location/Contact/Contact";
import Map from "../../../components/Location/Map/Map";

const HomePage = () => (
	<section className={classes.HomePage}>
		<h1 className="visually-hidden">Home</h1>
		<CarouselBox />
		<Banner />
		<SlideBlocks />
		<CarouselText />
		<div>
			{window.innerWidth <= 1280 && (
				<Contact
					link="https://goo.gl/maps/NW7RtuqB22GsncSX8"
					location="проспект Сакена Сейфуллина 617, Алматы"
					hrefTel="tel:+78125556666"
					tel="+7 (700) 111-66-66"
					hrefMail="mailto:info@bodybalance.kz"
					mail="info@bodybalance.kz"
					weekdaysHours="пн-пт: 7:00 - 21:00"
					saturdayHours="сб: 10:00 - 16:00 | 18:00 - 20:00"
					sundayHours="вс: 12:00 - 14:00 | 16:00 -19:00"
				/>
			)}
			{window.innerWidth <= 1280 && (
				<Map
					head="Пилатес студия на карте города"
					title="map"
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A59bbcaa30455e57a81c5202af2f1678d83a77961b5ce07b553a3656a59840780&amp;source=constructor"
					width="100%"
					height="100%"
					frameborder="0"
				/>
			)}
		</div>
	</section>
);

export default HomePage;
