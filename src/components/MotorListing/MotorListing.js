import React from "react";
import SingleMotor from "./SingleMotor";
import classes from "./MotorListing.module.css";
import Slider from "../Slider/Slider";
import { Outlet } from "react-router-dom";

const MotorListing = ({
  motorData,
  getFormDetails,
  dropOffLoc,
  pickupLoc,
  brands,
  setSelectedMotor,
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
        setSelectedMotor={setSelectedMotor}
      />
      <div className={classes["motor-container"]}>
        <div className={classes["motor--sec"]}>
          {/* <aside className={classes["motor-sideBar"]}>
            <SideBar />
          </aside> */}
          {motorData.length === 0 && (
            <h2 className={classes["motor--unavailable"]}>
              No Available Motors
            </h2>
          )}
          <ul className={classes["motor-card"]}>{motorList}</ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MotorListing;
