import React from "react";
import { GoogleAuth } from "../../Firebase/FirebaseAuth";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
const Footer = () => {
  return (
    <div className="Footer">
      <h1>
        <Link to="/home">Home</Link>
      </h1>

      <h1>
        <Link to="/about">About</Link>
      </h1>

      <h1>
        <Link to="/projects">Projects</Link>
      </h1>

      <h1>
        <Link to="/contact">Contact Form</Link>
      </h1>
      <Button type="primary" onClick={GoogleAuth}>
        Login
      </Button>
    </div>
  );
};
export default Footer;
