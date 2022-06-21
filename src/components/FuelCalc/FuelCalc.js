import React, { useRef, useState } from "react";
import classes from "./FuelCalc.module.css";

const FuelCalc = () => {
  const [fuelCost, setFuelCost] = useState();
  const [noOfGallons, setNoOfGallons] = useState();
  const [isSubmit, setIsSubmit] = useState(false);

  const totalDisRef = useRef();
  const fuelConsp = useRef();
  const price = useRef();
  const formRef = useRef();

  const calcFuelCost = (totalDistance, fuelConsump, pricePerGallon) => {
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
    <section>
      <h2>Results</h2>
      <div>
        <p>No of Gallons: {noOfGallons}</p>
        <p>Fuel Cost: {fuelCost} GHS</p>
      </div>
    </section>
  );
  return (
    <>
      <div className={classes.fContainer}>
        <div className={classes.formSec}>
          <section>
            <h2>Calculate fuel consumption</h2>
          </section>
          <form
            onSubmit={handleInputs}
            ref={formRef}
            className={classes.formInputs}
          >
            <label>Total Distance travelled</label>
            <input
              type="text"
              placeholder="enter total distance"
              ref={totalDisRef}
              required
              className={classes.fInput}
            />

            <div>
              <label>Fuel consumption</label>
              <input
                type="number"
                ref={fuelConsp}
                required
                className={classes.fInput}
              />
            </div>
            <div>
              <label>Price per gallon</label>
              <input
                type="number"
                ref={price}
                required
                className={classes.fInput}
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
