import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../pages/Home/Sections/NavBar";
import classes from "./MotorDetails.module.css";

const MotorDetails = ({ getMotorDetails }) => {
  const params = useParams();

  const motorDetails = getMotorDetails(parseInt(params.motorId));

  return (
    <>
      <NavBar />
      <div className={classes["details--container"]}>
        <div className={classes["detls-col"]}>
          <img
            src={motorDetails.img}
            alt={motorDetails.name}
            className={classes["detls-img"]}
          />
        </div>
        <div className={classes["detls-col"]}>
          <article>
            <h1 className={classes["detls-heading"]}>{motorDetails.name}</h1>
            <div className={classes["detls--pBrand"]}>
              <h2>
                GHS {motorDetails.price.toFixed(2)}
                <span className={classes["detls--perDay"]}>per day</span>
              </h2>
              <p>{motorDetails.brand}</p>
            </div>

            <p className={classes["detls-overview"]}>{motorDetails.overview}</p>
            <div className={classes["specs-container"]}>
              <h2>Specification</h2>
              <div className={classes["detls--specs"]}>
                <p>
                  Engine:
                  <span>{motorDetails.specification.engineCapacity}</span>
                </p>
                <p>
                  Fuel Tank:<span>{motorDetails.specification.fuelTank}</span>
                </p>
                <p>
                  Mileage:<span>{motorDetails.specification.mileage}</span>
                </p>
              </div>
              <div className={classes["detls--specs"]}>
                <p>
                  Wheels:<span>{motorDetails.specification.wheelType}</span>
                </p>
                <p>
                  Gears: <span>{motorDetails.specification.gears}</span>
                </p>
                <p>
                  Brakes: <span>{motorDetails.specification.brakes}</span>
                </p>
              </div>
              <button className={classes["detls-btn"]}>Book now</button>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default MotorDetails;