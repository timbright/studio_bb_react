import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import HomePage from "./containers/Home/HomePage";
import StudioPage from "./containers/Studio/StudioPage";
import TeachersPage from "./containers/Teachers/TeachersPage";
import ClassesPage from "./containers/Classes/ClassesPage";
import SchedulePage from "./containers/Schedule/SchedulePage";
import ContactsPage from "./containers/Contacts/ContactsPage";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/studio" component={StudioPage} />
          <Route path="/teachers" component={TeachersPage} />
          <Route path="/classes" component={ClassesPage} />
          <Route path="/schedule" component={SchedulePage} />
          <Route path="/contacts" component={ContactsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Layout>
    );
  }
}
