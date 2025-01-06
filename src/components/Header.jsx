import React from "react";

import "../index.css";
import "../App.css";
import logoUp from "../assets/img/photoshop/logo.png";
import { NavLink } from "react-router";

function Header() {
  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <NavLink to="/client/form" className="logo d-flex align-items-center">
          <img
            src={logoUp}
            className="img-fluid"
            alt="logo Header Art Developer"
          />
        </NavLink>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a to="#about-append">About</a>
            </li>
            <li className="dropdown">
              <NavLink to="javascript:void(0);">
                <span>Services</span>{" "}
                <i className="ri-arrow-down-s-line dropdown-indicator" />
                {/* <i class="ri-arrow-down-s-line"></i> */}
              </NavLink>
              <ul>
                <li>
                  <NavLink to="#">Custom Software Development</NavLink>
                </li>
                <li>
                  <NavLink to="#">Mobile App Development</NavLink>
                </li>
                <li>
                  <NavLink to="#">Web Application Development</NavLink>
                </li>
                <li>
                  <NavLink to="#">E-commerce Solutions</NavLink>
                </li>
                <li>
                  <NavLink to="#">UI/UX Design & Prototyping</NavLink>
                </li>
                <li>
                  <NavLink to="#">Cloud Solutions & Integration</NavLink>
                </li>
                <li>
                  <NavLink to="#">API Development & Integration</NavLink>
                </li>
                <li>
                  <NavLink to="#">AI & Machine Learning Solutions</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#boxes-hero">Why Us</NavLink>
            </li>
            <li>
              <NavLink to="#">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="#layanan-kita">Services</NavLink>
            </li>
            <li>
              <NavLink to="#contact">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
        {/* .navbar */}
        <div className="btn-nav d-flex align-items-center">
          <ul>
            <li className="login-nav">
              <button className="cunsulBtn">Free Consultation </button>
            </li>
          </ul>
        </div>
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
      </div>
    </header>
  );
}

export default Header;
