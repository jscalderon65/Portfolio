import React from "react";
import { LinkedinOutlined, GithubOutlined } from "@ant-design/icons";
const Home = () => {
  return (
    <div className="Home-container animate__animated animate__fadeIn">
      <div className="Home-main-text">
        <h1 className="Home-main-text-title">
          Hi, Im Jhonn Calderon !
        </h1>
        <p className="Home-main-text-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          dolore consequatur odit. Sint eveniet perspiciatis ratione consequatur
          blanditiis. Sapiente error unde quos aspernatur temporibus soluta nam
          explicabo laboriosam harum quaerat?
        </p>
        <div className="Home-divider"></div>
        <div className="Home-social-icons">
          <GithubOutlined className="pointer y-translate" /> <LinkedinOutlined className="pointer y-translate" />
        </div>
      </div>
    </div>
  );
};

export default Home;
