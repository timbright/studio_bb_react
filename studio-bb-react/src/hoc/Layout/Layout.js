import React, { Component } from "react";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import classes from "./Layout.module.scss";

export default class Layout extends Component {
  state = {
    menu: false
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    });
  };

  menuCloseHandler = () => {
    this.setState({
      menu: false
    });
  };

  render() {
    return (
      <article className={classes.Layout}>
        <Header />
        <Drawer isOpen={this.state.menu} onClose={this.menuCloseHandler} />
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <main>{this.props.children}</main>
        <Footer />
      </article>
    );
  }
}
