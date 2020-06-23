import React, { Component } from "react";

import classes from "./Layout.module.scss";
import Header from "../../components/Header/Header";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
	state = {
		showSideDrawer: false,
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};

	render() {
		let menu = null;
		if (window.innerWidth >= 1280) {
			menu = <Toolbar />;
		} else {
			menu = (
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler}
				/>
			);
		}
		return (
			<>
				<Header
					open={this.state.showSideDrawer}
					drawerToggleClicked={this.sideDrawerToggleHandler}
				/>
				{menu}
				<main className={classes.Content}>{this.props.children}</main>
				<Footer />
			</>
		);
	}
}

export default Layout;
