import React from "react";
import classes from "./Footer.module.scss";
//import sprite from "../../assets/svg/sprite.svg";

const Footer = props => (
  <footer className={classes.Footer}>
    <a href="https://www.bodybalance.kz">
      <svg width="291" height="121" viewBox="0 0 291.11 121">
        {/*<use href={sprite + "#body_balance_logo"}></use>*/}
      </svg>
    </a>
  </footer>
);

export default Footer;
