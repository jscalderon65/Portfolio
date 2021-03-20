import React from "react";
import {
  Menu,
  Footer,
  Projects,
  Home,
  About,
  ContactForm,
} from "../Components";
import { useMediaQuery } from "my-customhook-collection";
import { Switch, Route, Redirect } from "react-router-dom";
const PublicSwitch = () => {
  const mediaQuery = useMediaQuery("(max-width: 900px");
  const MainMenu = mediaQuery ? (
    <Footer />
  ) : (
      <Menu />
  );
  return (
    <div className="container">
      {MainMenu}
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={ContactForm} />
        <Redirect to="/Home" />
      </Switch>
    </div>
  );
};

export default PublicSwitch;
