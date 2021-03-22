import React from "react";
import {
  Menu,
  Footer,
  Projects,
  Home,
  About,
  ContactForm,
  Navbar,
} from "../Components";
import { useMediaQuery } from "my-customhook-collection";
import { Switch, Route, Redirect } from "react-router-dom";
const PublicSwitch = () => {
  const mediaQuery = useMediaQuery("(max-width: 900px");
  const MainMenu = mediaQuery ? (
    <>
      <Navbar />    
    <Footer />
    </>
  ) : (
    <>
      <Navbar />
      <Menu />
    </>
  );
  return (
    <Switch>
      <>
        {MainMenu}
        <div className="container">
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={ContactForm} />
          <Redirect to="/Home" />
        </div>
      </>
    </Switch>
  );
};

export default PublicSwitch;
