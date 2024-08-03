import React from "react";
import "./NavbarSecondary.css"; // Make sure to create this CSS file

const NavbarSecondary = () => {
  return (
    <div className="navbar-secondary">
      <ul className="navbar-secondary-list">
        <li>
          <a href="#videos">VIDEOS</a>
        </li>
        <li>
          <a href="#stories">STORIES</a>
        </li>
        <li>
          <a href="#academy">ACADEMY</a>
        </li>
        <li>
          <a href="#tech-help">TECH HELP</a>
        </li>
        <li>
          <a href="#service">SERVICE</a>
        </li>
        <li>
          <a href="#where-to-buy">WHERE TO BUY</a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarSecondary;
