import React from "react";
import classes from "./Features.module.css";
import motorIcon from "./image/motorIcon.png";
import trafficIcon from "./image/TrafficIcon.png";
import bookIcon from "./image/bookIcon.png";

const Features = () => {
  return (
    <>
      <div className={classes["features-container"]}>
        <section className={classes["feature-section"]}>
          <h2>Quick and Easy Motorbike Rentals</h2>
          <p>Plan your trip, book a ride at the comfort of your home</p>
          <div className={classes.row}>
            <div className={classes.column}>
              <img src={motorIcon} alt="motor" className={classes.icon} />

              <h3 className={classes["feature-caption"]}>Select Your Bike </h3>
              <p className={classes["feature-subCaption"]}>
                Are you a picky rider ? We offer you a plethora of motorbike
                brands to select from.
              </p>
            </div>
            <div className={classes.column}>
              <img src={bookIcon} alt="book" className={classes.icon} />
              <h3 className={classes["feature-caption"]}>Book The Bike </h3>
              <p className={classes["feature-subCaption"]}>
                Reserve a high-quality motorbike for that meets your needs and
                budget best.
              </p>
            </div>
            <div className={classes.column}>
              <img src={trafficIcon} alt="traffic" className={classes.icon} />
              <h3 className={classes["feature-caption"]}>Beat The Traffic</h3>
              <p className={classes["feature-subCaption"]}>
                No more wasting countless hours in traffic. Get to your
                appointment on time and beat the traffic
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Features;
