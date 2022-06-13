import React from "react";
import classes from "./Checkout.module.css";
import CheckoutForm from "./CheckoutForm";

const Checkout = ({ selectedMotor }) => {
  return (
    <div className={classes["checkout--row"]}>
      <div className={classes["checkout--col"]}>
        <h2 className={classes["form--caption"]}>Form Details</h2>
        <CheckoutForm />
      </div>
      <div className={classes["checkout--col"]}>
        <h3>Motor Details</h3>
        <article>
          <p>{selectedMotor.name}</p>
          <img src={selectedMotor.image} alt="motor" />
          <p>Pickup Station: {selectedMotor.pickupStation}</p>
          <p>Dropoff Station: {selectedMotor.dropOffStation}</p>
          <p>Price: {selectedMotor.price}</p>
        </article>
      </div>
    </div>
  );
};

export default Checkout;
