import React, { Component } from "react";
import classes from "./Header.module.scss";
import sprite from "../../assets/svg/sprite.svg";

export default class Header extends Component {
  render() {
    return (
      <header className={classes.Header}>
        <a href="https://www.bodybalance.kz">
          <svg width="291" height="121" viewBox="0 0 291.11 121">
            <use href={sprite + "#body_balance_logo"}></use>
          </svg>
        </a>
      </header>
    );
  }
}
