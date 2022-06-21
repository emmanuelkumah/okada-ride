import React, { useRef, useState } from "react";
import classes from "./FuelCalc.module.css";

const FuelCalc = () => {
  const [fuelCost, setFuelCost] = useState(0);
  const [noOfGallons, setNoOfGallons] = useState(0);
  const [totalDistance, setTotalDistance] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);

  const totalDisRef = useRef();
  const fuelConsp = useRef();
  const price = useRef();
  const formRef = useRef();

  const calcFuelCost = (totalDistance, fuelConsump, pricePerGallon) => {
    setTotalDistance(totalDistance);
    const noGallons = totalDistance / fuelConsump;
    const price = noGallons * pricePerGallon;
    setNoOfGallons(noGallons);
    setFuelCost(price);
    // console.log("calc", noOfGallons, fuelCost);
  };

  const handleInputs = (e) => {
    e.preventDefault();

    const totalDistance = totalDisRef.current.value;
    const fuelConsump = fuelConsp.current.value;
    const pricePerGallon = price.current.value;

    calcFuelCost(totalDistance, fuelConsump, pricePerGallon);
    formRef.current.reset();
    setIsSubmit(true);
  };

  const results = (
    <section className={classes.fResults}>
      <h2>Hey!, find your results below</h2>
      <div>
        <p>
          <span>Gas needed:</span>
          {`${noOfGallons.toFixed(2)} Gallons`}
        </p>
        <p>
          <span>Gas Cost: </span>
          {`GHS ${fuelCost.toFixed(2)} to go ${totalDistance} miles`}
        </p>
      </div>
    </section>
  );
  return (
    <>
      <div className={classes.fContainer}>
        <div className={classes.formSec}>
          <section className={classes.fHeading}>
            <h2>Fuel Calculator</h2>
            <p>
              Easily calculate fuel cost and the gallons/ liters need to
              complete your trip
            </p>
          </section>
          <form
            onSubmit={handleInputs}
            ref={formRef}
            className={classes.formInputs}
          >
            <label className={classes.fLabel}>Total Distance Travelled</label>
            <input
              type="text"
              placeholder="Enter total distance travelled in miles"
              ref={totalDisRef}
              required
              className={classes.fInput}
            />

            <div>
              <label className={classes.fLabel}>Fuel Consumption</label>
              <input
                type="number"
                ref={fuelConsp}
                required
                className={classes.fInput}
                placeholder="Enter fuel consumption (mpg)"
              />
            </div>
            <div>
              <label className={classes.fLabel}>Price Per Gallon</label>
              <input
                type="number"
                ref={price}
                required
                className={classes.fInput}
                placeholder="Enter price of gallon of fuel"
              />
            </div>
            <button className={classes.fBtn}>Calculate</button>
          </form>
          {isSubmit && results}
        </div>
      </div>
    </>
  );
};

export default FuelCalc;
