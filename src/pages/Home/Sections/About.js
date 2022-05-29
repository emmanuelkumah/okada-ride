import React from "react";
import classes from "./About.module.css";
import aboutImg from "./image/about2.jpg";
import { FaMotorcycle } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { BsShop } from "react-icons/bs";
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
              <p>
                <FaMotorcycle />
                <span>5</span>Motorbike Brands
              </p>
              <p>
                <BsShop />
                <span>13</span>Rental Outlets
              </p>
              <p>
                <GiAutoRepair />
                <span>3</span>Repair Shops
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
