import React from "react";
import classes from "./About.module.css";
import aboutImg from "./image/about2.jpg";
import { FaMotorcycle } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { BsShop } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
const About = () => {
  return (
    <div>
      <div className={classes["about-row"]}>
        <div className={classes["about-col"]}>
          <img src={aboutImg} alt="about" className={classes["about-img"]} />
        </div>
        <div className={classes["about-col"]}>
          <section>
            <h2>About Okada Ride</h2>
            <p className={classes["about-caption"]}>
              You start the engine and the adventure begins{" "}
            </p>
            <p className={classes["about-subCaption"]}>
              We provide motorbiker riders a convenient, hassle free and cost
              effective ways to commute in aroung Accra,without spending all
              your productive hours in traffic jams
            </p>
            <div className={classes["about-stats"]}>
              <IconContext.Provider
                value={{
                  color: "#f6b100",
                  size: "3rem",
                }}
              >
                <div>
                  <FaMotorcycle />
                </div>
                <p className={classes["icon"]}>
                  <span>5</span>Brands
                </p>
                <div>
                  <BsShop />
                </div>
                <p className={classes["icon"]}>
                  <span>13</span>Outlets
                </p>
                <div>
                  <GiAutoRepair />
                </div>
                <p className={classes["icon"]}>
                  <span>3</span>Shops
                </p>
              </IconContext.Provider>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
