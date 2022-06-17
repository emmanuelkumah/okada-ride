import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./MotorDetails.module.css";

const MotorDetails = ({ getMotorDetails, setSelectedMotor }) => {
  const params = useParams();
  const { motorId } = params;
  // console.log("the details is here", selectedMotrDetls);

  // const motorDetails = getMotorDetails(parseInt(motorId));

  const motorDetails = getMotorDetails(parseInt(motorId));

  // console.log("output", motorDetails);
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
        ...prevState,
        name: name,
        image: img,
        pickupStation: pickupLocation,
        dropOffStation: dropoffLocation,
        price: price,
      };
    });
  }, [pickupLocation, dropoffLocation]);

  return (
    <>
      <div className={classes["motor-details--container"]}>
        <div className={classes["motor-col"]}>
          <section>
            <img src={img} alt={name} className={classes["motor-img"]} />

            <div className={classes["motor-name"]}>
              <h1 className={classes["motor-heading"]}>{name}</h1>
              <p className={classes["motor-brand"]}>{brand}</p>
              <h2 className={classes["motorCost"]}>
                GHS {price.toFixed(2)}
                <span className={classes["motorCost--perDay"]}>per day</span>
              </h2>
            </div>
          </section>
        </div>
        <div className={classes["motor-col"]}>
          <article>
            <section className={classes["motor-overview"]}>
              <h2>Overview</h2>
              {motorDetails.overview}
            </section>
            <section className={classes["motorSpecs-container"]}>
              <h2>Specification</h2>
              <div className={classes["motor--specs"]}>
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
              <div className={classes["motor--specs"]}>
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
              <section>
                <h2>Motor Location</h2>
                <div className={classes["motor-destn"]}>
                  <p>
                    Pick Bike at: <span>{pickupLocation}</span>
                  </p>
                  <p>
                    Drop off at: <span>{dropoffLocation}</span>
                  </p>
                </div>
              </section>
              <Link to="checkout">
                <button className={classes["motor-btn"]}>Reserve Motor</button>
              </Link>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default MotorDetails;
