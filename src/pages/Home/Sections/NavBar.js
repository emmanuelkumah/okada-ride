import React, { useState, useEffect } from "react";
import classes from "./NavBar.module.css";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "./image/okadaLogo.png";
import { Link, NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  // const [isSticky, setIsSticky] = useState(false);
  const [isMenuClicked, setsIsMenuClicked] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleStickyNav);
  // }, []);

  const handleMenuIconClick = () => {
    setsIsMenuClicked(!isMenuClicked);
  };

  // const handleStickyNav = () => {
  //   if (window !== undefined) {
  //     let windowHeight = window.scrollY;
  //     windowHeight > 150 ? setIsSticky(true) : setIsSticky(false);
  //   }
  // };

  return (
    <>
      <header className={classes.navBar}>
        <div className={classes["navBar--container"]}>
          <div className={classes["navBrand--container"]}>
            <Link to="/" className={classes.navBrand}>
              <h1>
                <span>
                  <img src={logo} alt="okadaRide" className={classes.navLogo} />
                </span>
                Okada Ride
              </h1>
            </Link>
            <div
              className={classes["navMenu--icon"]}
              onClick={handleMenuIconClick}
            >
              {isMenuClicked ? <FaTimes /> : <FaBars />}
            </div>
          </div>
          <nav>
            <ul
              className={`${
                isMenuClicked ? classes["navMenu--active"] : classes.navMenu
              }`}
            >
              <li>
                <NavLink className={classes["navMenu--item"]} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={classes["navMenu--item"]} to="#about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className={classes["navMenu--item"]} to="#FAQ">
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink className={classes["navMenu--item"]} to="/motors">
                  Find Motors
                </NavLink>
              </li>
              <li>
                <NavLink className={classes["navMenu--item"]} to="/tools">
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
