import React from "react";
import {
  Projects,
  Home,
  Navbar,
  Footer
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
          <Redirect to="/home" />
          <Footer />
        </div>
      </>
    </Switch>
  );
};

export default PublicSwitch;
