import React from "react";
import classes from "./SingleMotor.module.css";

const SingleMotor = ({ img, name, id, specification, price, rating }) => {
  return (
    <div className={classes["motor--item"]}>
      <li key={id}>
        <div className={classes["motor--cover"]}>
          <span className={classes["motor--rating"]}>{rating}</span>
          <img src={img} alt={name} />
        </div>
        <div className={classes["motor--content"]}>
          <h3>{name}</h3>
        </div>
        <div className={classes["motor--spec"]}>
          <div className={classes["motor--specDetls"]}>
            <p>Engine:</p>
            <span>{specification.engineCapacity}</span>

            <p>Mileage:</p>
            <span>{specification.mileage}</span>
          </div>
          <div className={classes["motor--specDetls"]}>
            <p>Gears:</p>
            <span>{specification.gears}</span>
            <p>Fuel Tank: </p> <span>{specification.fuelTank}</span>
          </div>
        </div>
        <div className={classes["motor--price"]}>
          <p>
            GHS {price} <span> per day</span>
          </p>
          <button className={classes["motor-btnBk"]}>Book Ride</button>
        </div>
      </li>
    </div>
  );
};

export default SingleMotor;
