import React from "react";
import { Link, useLocation } from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";

import "./NavBar.css";

const NavBar = () => {
  const { pathname } = useLocation();

  const showNavBar =
    pathname === "/login" || pathname === "/signup" ? false : true;

  return (
    <>
      {showNavBar && (
        <div>
          <div className="nav_logo">
            <img src="./images/nb.png" alt="Not Found" />
          </div>

          <nav className="main-nav">
            <div className="list">
              <ul>
                <Link
                  style={{
                    color: pathname === "/" ? "#FF9540" : "white",
                    textDecoration: "none",
                  }}
                  to="/"
                >
                  Home
                </Link>
                <Link
                  style={{
                    color: pathname === "/mynotes" ? "#FF9540" : "white",
                    textDecoration: "none",
                  }}
                  to="/mynotes"
                >
                  My Notes
                </Link>
                <Link
                  style={{
                    color: pathname === "/features" ? "#FF9540" : "white",
                    textDecoration: "none",
                  }}
                  to="/features"
                >
                  Features
                </Link>
                <Link
                  style={{
                    color: pathname === "/aboutus" ? "#FF9540" : "white",
                    textDecoration: "none",
                  }}
                  to="/aboutus"
                >
                  About Us
                </Link>
              </ul>
              <div className="dash_board">
                <Dashboard />
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
