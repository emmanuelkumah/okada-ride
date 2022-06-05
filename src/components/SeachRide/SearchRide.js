import React from "react";
import classes from "./SearchRide.module.css";
import { formData } from "./data";
import { FaMotorcycle } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const SearchRide = () => {
  return (
    <div className={classes["form--container"]}>
      <form className={classes["form--fields"]}>
        <div>
          <p className={classes["form--label"]}>
            <FaMotorcycle className={classes["form--icon"]} />
            Select Motor Bike
          </p>

          <select className={classes["form--select"]}>
            {formData.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className={classes["pickUpLoc--container"]}>
          <p className={classes["form--label"]}>
            <HiLocationMarker className={classes["form--icon"]} />
            Pick Up Location
          </p>
          <select className={classes["form--select"]}>
            {formData.map((pickUpOpt) => (
              <option key={pickUpOpt.id} value={pickUpOpt.pickUp}>
                {pickUpOpt.pickUp}
              </option>
            ))}
          </select>
        </div>
        <div className={classes["pickup-date"]}>
          <p className={classes["form--label"]}>
            <BsCalendarDate className={classes["form--icon"]} />
            Pick Up Date
          </p>

          <input
            id="pickupDate"
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            name="pickup-date"
            className={classes["form--input"]}
          />
        </div>

        <div className={classes["DropOffLoc--container"]}>
          <p className={classes["form--label"]}>
            <HiLocationMarker className={classes["form--icon"]} />
            Drop Off Location
          </p>

          <select className={classes["form--select"]}>
            {formData.map((pickUpOpt) => (
              <option key={pickUpOpt.id} value={pickUpOpt.pickUp}>
                {pickUpOpt.pickUp}
              </option>
            ))}
          </select>
        </div>
        <div className={classes["pickup-date"]}>
          <p className={classes["form--label"]}>
            <BsCalendarDate className={classes["form--icon"]} />
            Drop off Date
          </p>

          <input
            id="pickupDate"
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            name="pickup-date"
            className={classes["form--input"]}
          />
        </div>
        <div className={classes["btn--search"]}>
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchRide;
