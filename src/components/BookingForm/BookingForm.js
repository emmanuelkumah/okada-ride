import React, { useRef } from "react";
import { formData } from "./data";
import classes from "./BookingForm.module.css";
import { FaMotorcycle } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BsCalendarDate } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

export const BookingForm = () => {
  const brandRef = useRef(null);
  const pickUpRef = useRef(null);
  const pickupTimeRef = useRef(null);
  const dropOffRef = useRef(null);
  const dropOffTimeRef = useRef(null);
  const pickupDateRef = useRef(null);
  const dropoffDateRef = useRef(null);

  const handleChange = () => {
    console.log(brandRef.current.value);
    console.log(pickUpRef.current.value);
    console.log(dropOffRef.current.value);
    console.log(pickupDateRef.current.value);
    console.log(dropoffDateRef.current.value);
    console.log(pickupTimeRef.current.value);
    console.log(dropOffTimeRef.current.value);
  };
  return (
    <div className={classes["booking--container"]}>
      <section>
        <h1 className={classes["bk-caption"]}>Book a ride</h1>
        <form className={classes["bk-form"]}>
          <div className={classes["motorbike-brand"]}>
            <IconContext.Provider value={{ className: classes["react-icons"] }}>
              <p>
                <FaMotorcycle />
                Select Motor Bike Type
              </p>
            </IconContext.Provider>

            <select onChange={handleChange} ref={brandRef}>
              {formData.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className={classes["pickup-loc"]}>
            <IconContext.Provider value={{ className: classes["react-icons"] }}>
              <p>
                <HiLocationMarker />
                Pick Up
              </p>
            </IconContext.Provider>

            <select
              onChange={handleChange}
              ref={pickUpRef}
              className={classes["bk-select"]}
            >
              {formData.map((pickUpOpt) => (
                <option key={pickUpOpt.id} value={pickUpOpt.pickUp}>
                  {pickUpOpt.pickUp}
                </option>
              ))}
            </select>
          </div>

          <div className={classes["dropoff-loc"]}>
            <IconContext.Provider
              value={{ color: "#F24C4C", className: classes["react-icons"] }}
            >
              <p>
                <HiLocationMarker />
                Drop Off
              </p>
            </IconContext.Provider>

            <select
              ref={dropOffRef}
              onChange={handleChange}
              className={classes["bk-select"]}
            >
              {formData.map((dropOff) => (
                <option key={dropOff.id} value={dropOff.dropOff}>
                  {dropOff.dropOff}
                </option>
              ))}
            </select>
          </div>

          <div className={classes["pickup-date"]}>
            <IconContext.Provider value={{ className: classes["react-icons"] }}>
              <p>
                <BsCalendarDate />
                Pick Up Date
              </p>
            </IconContext.Provider>

            <input
              id="pickupDate"
              type="date"
              min="2022-01-01"
              max="2022-12-31"
              name="pickup-date"
              onChange={handleChange}
              ref={pickupDateRef}
            />
          </div>

          <div className={classes["pickup-time"]}>
            <IconContext.Provider value={{ className: classes["react-icons"] }}>
              <p>
                <BiTime />
                Pick Up Time
              </p>
            </IconContext.Provider>

            <input
              id="pickupTime"
              name="pickupTime"
              type="time"
              min="9:00"
              max="5:00"
              required
              onChange={handleChange}
              ref={pickupTimeRef}
            />
          </div>

          <div className={classes["dropoff-date"]}>
            <IconContext.Provider value={{ className: classes["react-icons"] }}>
              <p>
                <BsCalendarDate />
                Drop off Date
              </p>
            </IconContext.Provider>

            <input
              id="dropoffDate"
              type="date"
              min="2022-01-01"
              max="2022-12-31"
              name="dropoffDate"
              onChange={handleChange}
              ref={dropoffDateRef}
            />
          </div>

          <div className={classes["dropoff-time"]}>
            <IconContext.Provider value={{ className: classes["react-icons"] }}>
              <p>
                <BiTime />
                Drop Off Time
              </p>
            </IconContext.Provider>

            <input
              id="dropOffTime"
              name="dropOffTime"
              type="time"
              min="9:00"
              max="5:00"
              required
              onChange={handleChange}
              ref={dropOffTimeRef}
            />
          </div>
          <div className={classes["btn-container"]}>
            <button className={classes["btn-search"]}>Search</button>
          </div>
        </form>
      </section>
    </div>
  );
};
