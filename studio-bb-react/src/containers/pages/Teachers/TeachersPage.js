import React from "react";
import classes from "./TeachersPage.module.scss";
import { Teachers } from "../../../components/Teachers/Teachers";

const TeachersPage = () => (
	<section className={classes.TeachersPage}>
		<h1 className="visually-hidden">Teachers</h1>
		<Teachers />
	</section>
);

export default TeachersPage;
