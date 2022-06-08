import React from "react";
import SingleMotor from "./SingleMotor";
import classes from "./MotorListing.module.css";
import SideBar from "./SideBar";
import Slider from "../Slider/Slider";
import { Outlet } from "react-router-dom";

const MotorListing = ({
  motorData,
  getFormDetails,
  dropOffLoc,
  pickupLoc,
  brands,
}) => {
  const motorList = motorData.map((motor) => (
    <SingleMotor {...motor} key={motor.id} />
  ));

  return (
    <>
      <Slider
        getFormDetails={getFormDetails}
        dropOffLoc={dropOffLoc}
        pickupLoc={pickupLoc}
        brands={brands}
      />
      <div className={classes["motor-container"]}>
        <div className={classes["motor--sec"]}>
          <aside className={classes["motor-sideBar"]}>
            <SideBar />
          </aside>
          <ul className={classes["motor-card"]}>{motorList}</ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MotorListing;
