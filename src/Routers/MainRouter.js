import React from "react";
import PublicSwitch from "./PublicSwitch";
import PrivateSwitch from "./PrivateSwitch";
import { useFirebaseUser } from "my-customhook-collection";
import { firebase } from "../Firebase/FirebaseConfig";
import { BrowserRouter } from "react-router-dom";
import { GoogleAuth, FirebaseLogOut } from "../Firebase/FirebaseAuth";
const MainRouter = () => {
  const [isOn] = useFirebaseUser(firebase);
  return (
    <BrowserRouter>
      <div>
        {isOn ? (
          <button onClick={FirebaseLogOut}>Logout</button>
        ) : (
          <button onClick={GoogleAuth}>Login</button>
        )}
        {isOn ? <PrivateSwitch /> : <PublicSwitch />}
      </div>
    </BrowserRouter>
  );
};

export default MainRouter;
