import React, { useState } from "react";
import classes from "./Navigation.module.css";
import { AiOutlineMenu, AiOutlineCloseSquare } from "react-icons/ai";
import logo from "./image/okadaLogo.png";
const Navigation = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const showSideNav = () => {
    setSideNavOpen(true);
    console.log(sideNavOpen);
  };
  const closeSideNav = () => {
    setSideNavOpen(false);
  };

  const navMenu = (
    <div>
      <AiOutlineCloseSquare
        onClick={closeSideNav}
        size={"30px"}
        className={classes["close--icon"]}
      />
      <div className={classes["nav__links"]}>
        <li>Home</li>
        <li>About</li>
        <li>Tools</li>
      </div>
    </div>
  );
  return (
    <div className={classes.container}>
      <div className={sideNavOpen && classes["container__overlay"]}></div>
      <div className={classes.navBrand} onClick={showSideNav}>
        <AiOutlineMenu size={"30px"} />
        <img src={logo} alt="okadaRide" className={classes.navLogo} />
        <h1>Okada Ride</h1>
      </div>
      <nav className={sideNavOpen && classes["container__sidebar"]}>
        <ul>{sideNavOpen && navMenu}</ul>
      </nav>
    </div>
  );
};

export default Navigation;
