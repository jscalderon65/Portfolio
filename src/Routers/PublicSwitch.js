import React from "react";
import {PortFolioContent} from '../Components'
import { Switch, Route, Redirect} from "react-router-dom";
const PublicSwitch = () => {
  return (
    <Switch>
      <Route exact path="/" component={PortFolioContent} />
      <Redirect to="/" />
    </Switch>
  );
};

export default PublicSwitch;