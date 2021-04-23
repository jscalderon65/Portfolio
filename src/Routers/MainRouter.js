import React from "react";
import PublicSwitch from "./PublicSwitch";
import PrivateSwitch from "./PrivateSwitch";
import { useFirebaseUser } from "my-customhook-collection";
import { firebase } from "../Firebase/FirebaseConfig";
import { BrowserRouter } from "react-router-dom";
const MainRouter = () => {
  const [isOn] = useFirebaseUser(firebase);
  return (
    <BrowserRouter>
      <div>
        {isOn? <PrivateSwitch /> : <PublicSwitch />}
      </div>
    </BrowserRouter>
  );
};

export default MainRouter;
