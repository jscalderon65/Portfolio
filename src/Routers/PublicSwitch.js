import React from "react";
import {
  Projects,
} from "../Components";
import { Switch, Route, Redirect } from "react-router-dom";
const PublicSwitch = () => {
  return (
    <Switch>
      <>
        <div className="container">
          <Route exact path="/projects" component={Projects} />
          <Redirect to="/projects" />
        </div>
      </>
    </Switch>
  );
};

export default PublicSwitch;
