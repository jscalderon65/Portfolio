import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {GithubOutlined, LinkedinOutlined,GoogleOutlined} from '@ant-design/icons'
const Contact = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  const onGoogle = ()=>{
    window.open("mailto:jhonnseca0599@gmail.com");
  }
  const onGitHub = ()=>{
    window.open("https://github.com/jscalderon65");
  }
  const onLinkedin = ()=>{
    window.open("https://github.com/jscalderon65");
  }
  return (
    <div className="Contact-container animate__animated animate__fadeIn">
      <div className="Contact-icons">
      <div className="Contact-icons-title">
      Contact
      <div className="Home-divider"></div>
      </div>
      <div className="Contact-icons-content">
      <GoogleOutlined onClick={onGoogle} className="Contact-icon"/>
      <GithubOutlined onClick={onGitHub} className="Contact-icon" />
      <LinkedinOutlined onClick={onLinkedin} className="Contact-icon"/>
      </div>
      </div>
    </div>
  );
};

export default Contact;
