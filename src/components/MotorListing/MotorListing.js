import React from "react";
import motorData from "./motorData";
import SingleMotor from "./SingleMotor";
import classes from "./MotorListing.module.css";
import SideBar from "./SideBar";

const MotorListing = () => {
  const motorList = motorData.map((motor) => <SingleMotor {...motor} />);
  return (
    <div className={classes["motor-container"]}>
      <h1>Find your ride</h1>
      <div className={classes["motor--sec"]}>
        <aside className={classes["motor-sideBar"]}>
          <SideBar />
        </aside>
        <ul className={classes["motor-card"]}>{motorList}</ul>
      </div>
    </div>
  );
};

export default MotorListing;
