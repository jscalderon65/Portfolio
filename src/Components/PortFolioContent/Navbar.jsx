import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { GoogleAuth } from "../../Firebase/FirebaseAuth";
const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="MainContainer-navbar">
      <div className="Navbar-container">
        <div className="Navbar-menu-main-info">
          <i class="fas fa-code"></i>
          {pathname === "/home" || pathname === "/contact" ? (
            <>
              <div id="stars-group-1"></div>
            </>
          ) : null}
        </div>
        <div className="Navbar-menu">
          <NavLink
            to="/home"
            className="Navbar-menu-item"
            activeClassName="Navbar-menu-item-active"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="Navbar-menu-item"
            activeClassName="Navbar-menu-item-active"
          >
            About me
          </NavLink>
          <NavLink
            to="/projects"
            className="Navbar-menu-item"
            activeClassName="Navbar-menu-item-active"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="Navbar-menu-item"
            activeClassName="Navbar-menu-item-active"
          >
            Contact
          </NavLink>
        </div>
        <div className="Navbar-menu-copy-right">
          <div className="Home-divider" onClick={GoogleAuth}></div>© Copyright
          2021
        </div>
      </div>
    </div>
  );
};

export default Navbar;
