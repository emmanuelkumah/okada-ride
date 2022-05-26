import React, { useState, useEffect } from "react";
import classes from "./NavBar.module.css";
import logo from "./image/okadaLogo.png";

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
    <nav
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
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
