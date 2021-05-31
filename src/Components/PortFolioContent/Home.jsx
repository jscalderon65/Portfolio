import React, { useEffect } from "react";
import { LinkedinOutlined, GithubOutlined } from "@ant-design/icons";
import { animateScroll as scroll } from "react-scroll";
const Home = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <div className="Home-container animate__animated animate__fadeIn">
      <div id="stars-group-1" className="Home-stars"></div>
      <div id="stars-group-6" className="Home-stars"></div>
      <div className="Home-main-text">
        <h1 className="Home-main-text-title">Hi, Im Jhonn Calderon !</h1>
        <p className="Home-main-text-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          dolore <b>consequatur</b> odit. Sint eveniet perspiciatis ratione
          consequatur blanditiis. Sapiente error unde quos <b>consequatur</b> temporibus soluta nam <b>consequatur</b> laboriosam harum quaerat?
        </p>
        <div className="Home-divider"></div>
        <div className="Home-social-icons">
          <GithubOutlined className="pointer y-translate" />{" "}
          <LinkedinOutlined className="pointer y-translate" />
        </div>
      </div>
    </div>
  );
};

export default Home;
