import React from "react";
import classes from "./Contacts.module.scss";
import Contact from "./Contact/Contact";
import Map from "./Map/Map";
import Feedback from "../../containers/Feedback/Feedback";

const Contacts = () => {
	let map = null;
	if (window.innerWidth >= 1280) {
		map = <Map />;
	}

	return (
		<article className={classes.Contacts}>
			<h1 className="visually-hidden">Контакты</h1>
			<Contact hours />
			{map}
			<Feedback />
		</article>
	);
};

export default Contacts;
