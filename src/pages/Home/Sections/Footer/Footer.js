import React from "react";
import classes from "./Footer.module.css";
import { GiSelfLove } from "react-icons/gi";

const Footer = () => {
  return (
    <>
      <footer className={classes["footer-container"]}>
        <div>
          <p>
            Made with <GiSelfLove />
            by e.fkumah - All Rights reserved
          </p>
          <div></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
