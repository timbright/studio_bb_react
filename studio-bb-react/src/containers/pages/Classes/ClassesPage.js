import React from "react";
import classes from "./ClassesPage.module.scss";
import GroupClasses from "../../../components/Classes/GroupClasses/GroupClasses";
import PrivateClasses from "../../../components/Classes/PrivateClasses/PrivateClasses";

const ClassesPage = () => (
	<section className={classes.ClassesPage}>
		<h1 className="visually-hidden">Classes</h1>
		<GroupClasses />
		<PrivateClasses />
	</section>
);

export default ClassesPage;
