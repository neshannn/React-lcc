import React from "react";

import { Link } from "react-router-dom";
import NavItem from "../Data/NavItem";
const Navbar = () => {
  function handleClick() {
    alert("Button Clicked");
  }
  return (
    <div className="nav">
      <div>LOGO</div>
      <div className="nav-links">
        <ul>
          {/* <li>
            <Link  to="/">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <IoIosContact />
              About
            </Link>
          </li>
          <li>
            <Link to="/contacts">
              <FaPhoneAlt />
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <FaBlog /> Blog
            </Link>
          </li>
          <li>
            <Link to="/Movies">
              <FaBlog /> Movies
            </Link>
          </li> */}
          {NavItem.map((item, i) => {
            return (
              <li key={item.id}>
                <Link to={item.to}>
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="search">
        <input type="text" name="" id="" placeholder="search" />
      </div>
    </div>
  );
};

export default Navbar;
