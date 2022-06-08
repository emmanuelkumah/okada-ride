import React from "react";
import { Link } from "react-router-dom";
import classes from "./Hero.module.css";
import HeroBanner from "./image/banner_image.png";
import motor from "./image/okadaMotor.png";
import clouds from "./image/sunClouds.png";
import birds from "./image/birds.png";

export const HeroSection = () => {
  return (
    <div className={classes["hero-container"]}>
      <div className={classes.row}>
        <div className={classes.column}>
          <section className={classes.heroCaption}>
            <p>Beat the Traffic</p>
            <h2>
              <span className={classes.heroText_drive}>Driving</span> is
              Stressful,<span className={classes.heroText_ride}>Riding</span> is
              Refreshing
            </h2>
            <h3> Book a motorbike ride for all your trips</h3>
            <Link to="/motors">
              <button className={classes["hero-btn"]}>Find Motorbikes</button>
            </Link>
          </section>
        </div>
        <div className={classes.column}>
          <div className={classes["heroImg-container"]}>
            <img
              src={HeroBanner}
              alt="heroBaner"
              className={classes["hero--banner"]}
            />
            <img src={clouds} alt="clouds" className={classes["clouds-img"]} />
            <img src={birds} alt="birds" className={classes["birds-img"]} />
            <img
              src={motor}
              alt="motorCycle"
              className={classes["motor-img"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
