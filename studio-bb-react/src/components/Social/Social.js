import React from "react";
import classes from "./Social.module.scss";
import sprite from "../../assets/svg/sprite.svg";

const Social = props => {
  return (
    <ul className={classes.Social}>
      <li>
        <a href={props.hrefFacebook} title="facebook">
          <svg width="50" height="50" viewBox="0 0 512 512">
            <use href={sprite + "#facebook"}></use>
          </svg>
        </a>
      </li>
      <li>
        <a href={props.hrefInstagram} title="instagram">
          <svg width="50" height="50" viewBox="0 0 512 512">
            <use href={sprite + "#instagram"}></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default Social;
