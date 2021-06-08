import React, { useEffect } from "react";
import { LinkedinOutlined, GithubOutlined } from "@ant-design/icons";
import { animateScroll as scroll } from "react-scroll";
const Home = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  const onGitHub = () => {
    window.open("https://github.com/jscalderon65");
  };
  const onLinkedin = () => {
    window.open("https://github.com/jscalderon65");
  };
  return (
    <div className="Home-container animate__animated animate__fadeIn">
      <div id="stars-group-1" className="Home-stars"></div>
      <div id="stars-group-6" className="Home-stars"></div>
      <div className="Home-main-text">
        <h1 className="Home-main-text-title">Hi, Im Jhonn Calderon !</h1>
        <p className="Home-main-text-description">
          I am a software developer and enthusiast of new technologies and
          autonomous learning, I am currently a computer and systems engineering
          student and I invite you to check my website and learn a little more
          about my work.
        </p>
        <div className="Home-divider"></div>
        <div className="Home-social-icons">
          <GithubOutlined onClick={onGitHub} className="pointer y-translate" />{" "}
          <LinkedinOutlined
            onClick={onLinkedin}
            className="pointer y-translate"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
