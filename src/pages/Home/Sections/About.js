import React from "react";
import classes from "./About.module.css";
import aboutImg from "./image/riders.png";
import { FaMotorcycle } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { BsShop } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
const About = () => {
  return (
    <div className={classes["about-container"]}>
      <div className={classes["about-row"]}>
        <div className={classes["about-col"]}>
          <img src={aboutImg} alt="about" className={classes["about-img"]} />
        </div>
        <div className={classes["about-col"]}>
          <section className={classes["about-details"]}>
            <h2>About Okada Ride</h2>
            <p className={classes["about-caption"]}>
              You start the engine and the adventure begins{" "}
            </p>
            <p className={classes["about-subCaption"]}>
              We provide motorbiker riders a convenient, hassle free and cost
              effective ways to commute in and around Accra, without spending
              all your productive hours in traffic jams
            </p>
            <div className={classes["about-stats"]}>
              <div className={classes["about-icon"]}>
                <FaMotorcycle />
                <span>5 Brands</span>
              </div>

              <div className={classes["about-icon"]}>
                <BsShop />

                <span>13 Locations</span>
              </div>

              <div className={classes["about-icon"]}>
                <GiAutoRepair />

                <span>3 Shops</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
