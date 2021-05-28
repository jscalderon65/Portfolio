import React from "react";
import {
  Projects,
} from "../Components";
import { Switch, Route, Redirect } from "react-router-dom";
const PublicSwitch = () => {
  return (
    <Switch>
      <>
        <div className="MainContainer-container">
          <div className="MainContainer-navbar">
          <div className="Navbar-container"><h1>Navbar</h1></div>
          </div>
          <Route exact path="/projects" component={Projects} />
          <Redirect to="/projects" />
          <div className="MainContainer-footer">
          <div className="Footer-container"><h1>Footer</h1></div>
          </div>
        </div>
      </>
    </Switch>
  );
};

export default PublicSwitch;
