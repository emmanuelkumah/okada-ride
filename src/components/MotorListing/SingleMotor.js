import React from "react";
import classes from "./SingleMotor.module.css";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const SingleMotor = ({ img, name, id, specification, price, rating }) => {
  return (
    <div className={classes["motor--item"]}>
      <li key={id}>
        <div className={classes["motor--cover"]}>
          <img src={img} alt={name} />
        </div>
        <div className={classes["motor--content"]}>
          <h3>{name}</h3>
          <span className={classes["motor--rating"]}>
            {rating} <AiFillStar />
          </span>
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
        <div className={classes["motor--priceContainer"]}>
          <p>
            GHS {price} <span className={classes["motor-price"]}> per day</span>
          </p>
          <Link to={`/motors/${id}`}>
            <button className={classes["motor-btnBk"]}>View Details</button>
          </Link>
        </div>
      </li>
    </div>
  );
};

export default SingleMotor;
