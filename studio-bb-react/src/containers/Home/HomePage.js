import React from "react";
import classes from "./HomePage.module.scss";
import CarouselBox from "../../components/CarouselBox/CarouselBox";

const HomePage = props => (
  <section className={classes.HomePage}>
    <h1 className="visually-hidden">Home</h1>
    <CarouselBox />
  </section>
);

export default HomePage;
