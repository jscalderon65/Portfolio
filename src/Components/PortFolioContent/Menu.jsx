import React from "react";
import { Image } from "antd";
import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  MailOutlined,
  UserOutlined,
  BookOutlined,
} from "@ant-design/icons";

const routes = [
  {
    route: "/home",
    icon: <HomeOutlined style={{ fontSize: "30px" }} />,
    text: "Home",
  },
  {
    route: "/about",
    icon: <UserOutlined style={{ fontSize: "30px" }} />,
    text: "About",
  },
  {
    route: "/projects",
    icon: <BookOutlined style={{ fontSize: "30px" }} />,
    text: "Projects",
  },
  {
    route: "/contact",
    icon: <MailOutlined style={{ fontSize: "30px" }} />,
    text: "Contact",
  },
];
const MenuItem = ({ route, icon, text }) => {
  return (
    <NavLink activeClassName="navLink"
      className="menu-item"
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "center",
      }}
      to={route}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>{icon}</div>
        {text}
      </div>
    </NavLink>
  );
};
const Menu = () => {
  return (
    <div className="Menu">
      {routes.map((item) => (
        <MenuItem {...item} />
      ))}
    </div>
  );
};

export default Menu;
