import React from "react";
import classes from "./Contact.module.scss";
import sprite from "../../../assets/svg/sprite.svg";

const Contact = props => {
  return (
    <section className={classes.Contact}>
      <ul>
        <li>
          <a href={props.link}>
            <svg width="64" height="64" viewBox="0 0 512 512">
              <use href={sprite + "#location"}></use>
            </svg>
            <span>{props.location}</span>
          </a>
        </li>
        <li>
          <a href={props.hrefTel}>
            <svg width="64" height="64" viewBox="0 0 512 512">
              <use href={sprite + "#telephone"}></use>
            </svg>
            <span>{props.tel}</span>
          </a>
        </li>
        <li>
          <a href={props.hrefMail}>
            <svg width="64" height="64" viewBox="0 0 512 512">
              <use href={sprite + "#mail"}></use>
            </svg>
            <span>{props.mail}</span>
          </a>
        </li>
        <li>
          <svg width="64" height="64" viewBox="0 0 512 512">
            <use href={sprite + "#clock"}></use>
          </svg>
          <div>
            <p>{props.weekdaysHours}</p>
            <p>{props.saturdayHours}</p>
            <p>{props.sundayHours}</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
