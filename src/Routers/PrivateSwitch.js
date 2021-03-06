import React from "react";
import {AdminDashBoard} from '../Components'
import { Switch, Route, Redirect } from "react-router-dom";
const PrivateSwitch = () => {
  return (
      <Switch>
        <Route exact path="/Admin" component={AdminDashBoard} />
        <Redirect to="/Admin" />
      </Switch>
  );
};
export default PrivateSwitch;
