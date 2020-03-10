import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";

export default class App extends Component {
  //@ хранится роутинг
  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}
