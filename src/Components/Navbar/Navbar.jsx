import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <NavLink
          to="/"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/program"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Program
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          About Us
        </NavLink>
        <NavLink
          to="/campus"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Campus
        </NavLink>
        {/* <NavLink
          to="/testimonial"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Testimonials
        </NavLink> */}
        <NavLink
          to="/contact"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          <button className="btn">contact Us</button>
        </NavLink>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
