import React, { useContext, useEffect } from "react";
import classes from "./ContactsPage.module.scss";
import Contact from "../../../components/Location/Contact/Contact";
import Map from "../../../components/Location/Map/Map";
import PostForm from "../../../components/PostForm/PostForm";
import { PostFormContext } from "../../../context/postForm/postFormContext";

const ContactsPage = () => {
	const { open } = useContext(PostFormContext);

	useEffect(() => {
		open();
	}, []);

	return (
		<section className={classes.ContactsPage}>
			<h1 className="visually-hidden">Contacts</h1>
			<Contact flag />
			<Map />
			<PostForm />
		</section>
	);
};

export default ContactsPage;
