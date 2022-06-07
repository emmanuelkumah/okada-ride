import React from "react";
import SingleMotor from "./SingleMotor";
import classes from "./MotorListing.module.css";
import SideBar from "./SideBar";
import NavBar from "../../pages/Home/Sections/NavBar";
import Footer from "../../pages/Home/Sections/Footer/Footer";
import Slider from "../Slider/Slider";

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
      <NavBar />
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
      <Footer />
    </>
  );
};

export default MotorListing;
