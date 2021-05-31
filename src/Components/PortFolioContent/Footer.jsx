import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  FundProjectionScreenOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
const Footer = () => {
  return (
    <div className="MainContainer-footer">
      <div className="Footer-container">
        <NavLink
          to="/home"
          activeClassName="Footer-item-active"
          className="Footer-item"
        >
          <HomeOutlined />
          Home
        </NavLink>
        <NavLink
          to="/about"
          activeClassName="Footer-item-active"
          className="Footer-item"
        >
          <UserOutlined />
          About
        </NavLink>
        <NavLink
          to="/projects"
          activeClassName="Footer-item-active"
          className="Footer-item"
        >
          <FundProjectionScreenOutlined />
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName="Footer-item-active"
          className="Footer-item"
        >
          <ContactsOutlined />
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
