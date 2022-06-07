import React, { useRef } from "react";
import classes from "./SearchRide.module.css";
// import { formData } from "./data";
// import data from "../../data";
import { FaMotorcycle } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const SearchRide = ({ getFormDetails, pickupLoc, dropOffLoc, brands }) => {
  const selectBrand = useRef(null);
  const pickupLocation = useRef(null);
  const dropoffLocation = useRef(null);
  const pickupDate = useRef(null);
  const dropoffDate = useRef(null);

  let searchFields = {
    brand: "",
    pickUp: "",
    dropOff: "",
    pickupDate: "",
    dropoffDate: "",
  };
  const handleFormInput = () => {
    searchFields.brand = selectBrand.current.value;
    searchFields.pickUp = pickupLocation.current.value;
    searchFields.dropOff = dropoffLocation.current.value;
    searchFields.pickupDate = pickupDate.current.value;
    searchFields.dropoffDate = dropoffDate.current.value;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getFormDetails(searchFields);
  };

  return (
    <div className={classes["form--container"]}>
      <form className={classes["form--fields"]} onSubmit={handleFormSubmit}>
        <div>
          <p className={classes["form--label"]}>
            <FaMotorcycle className={classes["form--icon"]} />
            Select Motor Bike
          </p>

          <select
            className={classes["form--select"]}
            ref={selectBrand}
            onChange={handleFormInput}
          >
            {brands.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className={classes["pickUpLoc--container"]}>
          <p className={classes["form--label"]}>
            <HiLocationMarker className={classes["form--icon"]} />
            Pick Up Location
          </p>
          <select
            className={classes["form--select"]}
            ref={pickupLocation}
            onChange={handleFormInput}
          >
            {pickupLoc.map((item, index) => (
              <option key={index} value={item}>
                {item}
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
            ref={pickupDate}
            onChange={handleFormInput}
          />
        </div>

        <div className={classes["DropOffLoc--container"]}>
          <p className={classes["form--label"]}>
            <HiLocationMarker className={classes["form--icon"]} />
            Drop Off Location
          </p>

          <select
            className={classes["form--select"]}
            ref={dropoffLocation}
            onChange={handleFormInput}
          >
            {dropOffLoc.map((item, index) => (
              <option key={index} value={item}>
                {item}
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
            ref={dropoffDate}
            onChange={handleFormInput}
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
