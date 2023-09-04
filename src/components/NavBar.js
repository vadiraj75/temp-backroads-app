import React from "react";
import { pageLinks, socialLinks } from "../data";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {pageLinks.map((pl) => {
            return (
              <li key={pl.id}>
                <a href={pl.href} className="nav-link">
                  {pl.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((sl) => {
            return (
              <li key={sl.id}>
                <a
                  href={sl.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={sl.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
