import React, { useState, useEffect } from "react";
import classes from "./NavBar.module.css";
import logo from "./image/okadaLogo.png";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNav);
  }, []);

  const handleStickyNav = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setIsSticky(true) : setIsSticky(false);
    }
  };

  return (
    <>
      <header
        className={`${classes.navContainer} ${isSticky ? classes.sticky : ""}`}
      >
        <div className={classes.navBrand}>
          <h1>
            <span>
              <img src={logo} alt="okadaRide" className={classes.navLogo} />
            </span>
            Okada Ride
          </h1>
        </div>

        <div className={classes.navMenu}>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName={classes.active} to="/">
                  Home
                </NavLink>
              </li>
              <li>About</li>
              <li>Services</li>
              <li>
                <NavLink activeClassName={classes.active} to="/motors">
                  Find Motors
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/tools">
                  Fuel Calculator
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
