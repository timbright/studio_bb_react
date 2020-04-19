import React from "react";
import classes from "./IconPhone.module.scss";
import sprite from "../../../assets/svg/sprite.svg";

const IconPhone = props => {
  return (
    <div className={classes.IconPhone}>
      <a href="tel:+78125556666" title="phone">
        <svg width="512" height="512" viewBox="0 0 512 512">
          <use href={sprite + "#phone-volume-icon"}></use>
        </svg>
      </a>
    </div>
  );
};

export default IconPhone;
