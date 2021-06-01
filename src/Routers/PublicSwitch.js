import React from "react";
import {
  Projects,
  Home,
  Navbar,
  Footer,
  About,
  Contact
} from "../Components";
import { Switch, Route, Redirect } from "react-router-dom";
const PublicSwitch = () => {
  return (
    <Switch>
      <>
        <div className="MainContainer-container">
          <Navbar />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/home" />
          <Footer />
        </div>
      </>
    </Switch>
  );
};

export default PublicSwitch;
