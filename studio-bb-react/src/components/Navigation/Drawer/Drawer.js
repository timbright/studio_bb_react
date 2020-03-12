import React, { Component } from "react";
import classes from "./Drawer.module.scss";
import { NavLink } from "react-router-dom";
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
  { to: "/", label: "Главная", exact: true },
  { to: "/studio", label: "Студия", exact: false },
  { to: "/teachers", label: "Преподаватели", exact: false },
  { to: "/classes", label: "Классы", exact: false },
  { to: "/schedule", label: "Расписание", exact: false },
  { to: "/contacts", label: "Контакты", exact: false }
];

class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose();
  };
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }
  render() {
    const cls = [classes.Drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    return (
      <>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </>
    );
  }
}

export default Drawer;
