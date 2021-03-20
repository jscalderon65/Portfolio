import React from "react";
import { GoogleAuth } from "../../Firebase/FirebaseAuth";
import { Button } from "antd";
import { Link } from "react-router-dom";
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

        <Link className="Footer-item" to="/about">
          <UserOutlined />
          About me
        </Link>



        <Link className="Footer-item" to="/projects">
          <BookOutlined />
          Projects
        </Link>
      

        <Link className="Footer-item" to="/home">
          <HomeOutlined />
          Home
        </Link>
      

        <Link className="Footer-item" to="/contact">
          <MailOutlined />
          Contact
        </Link>      
{/*             <Button type="primary" onClick={GoogleAuth}>
        Login
      </Button> */}
    </div>
  );
};
export default Footer;
