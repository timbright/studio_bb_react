import React, { Component } from "react";
import classes from "./Home.module.scss";
import CarouselBox from "../../components/CarouselBox/CarouselBox";

export default class Home extends Component {
  render() {
    return (
      <article className={classes.Home}>
        <h1>Home</h1>
        <CarouselBox />
      </article>
    );
  }
}
