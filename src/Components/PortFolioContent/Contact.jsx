import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
const Contact = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <div className="Contact-container animate__animated animate__fadeIn">
      <h1> Hola </h1>
    </div>
  );
};

export default Contact;
