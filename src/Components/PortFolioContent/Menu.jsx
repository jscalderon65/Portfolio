import React from "react";
import { Divider } from "antd";
import { Link } from "react-router-dom";
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
    <Link
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "center",
      }}
      to={route}
    >
      <div style={{     display: "flex",
        alignItems: "center",flexDirection: "column",}}>
        <div style={{  }}>{icon}</div>
        {text}
      </div>
    </Link>
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
