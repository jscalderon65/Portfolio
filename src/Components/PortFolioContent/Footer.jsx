import React from "react";
/* import { GoogleAuth } from "../../Firebase/FirebaseAuth";
import { Button } from "antd"; */
import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  MailOutlined,
  UserOutlined,
  BookOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
const Footer = () => {
  return (
    <div className="Footer">
        <NavLink className="Footer-item menu-item" activeClassName="navLink" to="/home">
          <HomeOutlined />
          Home
        </NavLink>

        <NavLink className="Footer-item menu-item" activeClassName="navLink" to="/about">
          <UserOutlined />
          About
        </NavLink>

        <NavLink className="Footer-item menu-item" activeClassName="navLink" to="/projects">
          <BookOutlined />
          Projects
        </NavLink>
      
        <NavLink className="Footer-item menu-item" activeClassName="navLink" to="/contact">
          <MailOutlined />
          Contact
        </NavLink>      
{/*             <Button type="primary" onClick={GoogleAuth}>
        Login
      </Button> */}
    </div>
  );
};
export default Footer;
