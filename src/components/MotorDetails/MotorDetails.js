import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./MotorDetails.module.css";

const MotorDetails = ({ getMotorDetails, setSelectedMotor }) => {
  const params = useParams();
  const { motorId } = params;
  // console.log("the details is here", selectedMotrDetls);

  // const motorDetails = getMotorDetails(parseInt(motorId));

  const motorDetails = getMotorDetails(parseInt(motorId));

  console.log("output", motorDetails);
  const {
    brand,
    name,
    price,
    pickupLocation,
    dropoffLocation,
    img,
    specification,
  } = motorDetails;

  //get the values
  useEffect(() => {
    setSelectedMotor((prevState) => {
      return {
        name: name,
        image: img,
        pickupStation: pickupLocation,
        dropOffStation: dropoffLocation,
        price: price,
      };
    });
  }, []);

  return (
    <>
      <div className={classes["details--container"]}>
        <div className={classes["detls-col"]}>
          <img src={img} alt={name} className={classes["detls-img"]} />
        </div>
        <div className={classes["detls-col"]}>
          <article>
            <h1 className={classes["detls-heading"]}>{name}</h1>
            <div className={classes["detls--pBrand"]}>
              <h2>
                GHS {price.toFixed(2)}
                <span className={classes["detls--perDay"]}>per day</span>
              </h2>
              <p>{brand}</p>
            </div>

            <p className={classes["detls-overview"]}>{motorDetails.overview}</p>
            <div className={classes["specs-container"]}>
              <h2>Specification</h2>
              <div className={classes["detls--specs"]}>
                <p>
                  Engine:
                  <span>{specification.engineCapacity}</span>
                </p>
                <p>
                  Fuel Tank:
                  <span>{specification.fuelTank}</span>
                </p>
                <p>
                  Mileage:<span>{specification.mileage}</span>
                </p>
              </div>
              <div className={classes["detls--specs"]}>
                <p>
                  Wheels:
                  <span>{specification.wheelType}</span>
                </p>
                <p>
                  Gears: <span>{specification.gears}</span>
                </p>
                <p>
                  Brakes: <span>{specification.brakes}</span>
                </p>
              </div>
              <div>
                <p>
                  Pick up Location: <span>{pickupLocation}</span>
                </p>
                <p>
                  Drop off location: <span>{dropoffLocation}</span>
                </p>
              </div>
              <Link to="checkout">
                <button className={classes["detls-btn"]}>Book now</button>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default MotorDetails;
