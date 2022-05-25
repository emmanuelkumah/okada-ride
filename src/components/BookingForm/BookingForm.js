import React, { useRef } from "react";
import { formData } from "./data";
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
    <div>
      <section>
        <h1>Book a ride</h1>
      </section>
      <form>
        <label>
          {" "}
          Motor Bike Type:
          <select onChange={handleChange} ref={brandRef}>
            {formData.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Pick Up:
          <select onChange={handleChange} ref={pickUpRef}>
            {formData.map((pickUpOpt) => (
              <option key={pickUpOpt.id} value={pickUpOpt.pickUp}>
                {pickUpOpt.pickUp}
              </option>
            ))}
          </select>
        </label>
        <label>
          {" "}
          Drop Off:
          <select ref={dropOffRef} onChange={handleChange}>
            {formData.map((dropOff) => (
              <option key={dropOff.id} value={dropOff.dropOff}>
                {dropOff.dropOff}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="pickupDate">
          Pick Up Date:
          <input
            id="pickupDate"
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            name="pickup-date"
            onChange={handleChange}
            ref={pickupDateRef}
          />
        </label>
        <label htmlFor="pickupTime">
          {" "}
          Pick Up Time:
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
        </label>
        <label htmlFor="dropoffDate">
          Drop off Date:
          <input
            id="dropoffDate"
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            name="dropoffDate"
            onChange={handleChange}
            ref={dropoffDateRef}
          />
        </label>
        <label htmlFor="dropOffTime">
          {" "}
          Dropp off Time:
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
        </label>
      </form>
    </div>
  );
};
