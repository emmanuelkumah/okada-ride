import React from "react";
import classes from "./Hero.module.css";
import HeroBanner from "./image/banner_image.png";
import motor from "./image/motor.png";

export const HeroSection = () => {
  return (
    <div>
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
          </section>
        </div>
        <div className={classes.column}>
          <img src={HeroBanner} alt="heroBaner" />
          <div className={classes["motor--section"]}>
            {" "}
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
