import React from "react";
import classes from "./Checkout.module.css";

const Checkout = ({ selectedMotor }) => {
  return (
    <div className={classes["checkout--row"]}>
      <div className={classes["checkout--col"]}>
        <h2 className={classes["form--caption"]}>Form Details</h2>
        <form className={classes["form--details"]}>
          <div className={classes["checkout--container"]}>
            <div>
              <label htmlFor="firstName">FirstName</label>
              <input
                id="firstName"
                type="text"
                placeholder="first Name"
                required
                className={classes["name--input"]}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                required
                className={classes["name--input"]}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                className={classes["name--input"]}
              />
            </div>
            <div>
              <label htmlFor="phoneNo">Phone Number</label>
              <input
                id="phoneNo"
                type="number"
                placeholder="Phone number"
                className={classes["name--input"]}
              />
            </div>
          </div>
          <div>
            {" "}
            <button className={classes["submit--btn"]}>Submit</button>
          </div>
        </form>
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
