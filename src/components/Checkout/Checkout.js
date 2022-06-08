import React from "react";
import classes from "./Checkout.module.css";

const Checkout = () => {
  return (
    <div className={classes["checkout--row"]}>
      <div className={classes["checkout--col"]}>
        <h2 className={classes["form--caption"]}>Form Details</h2>
        <form>
          <div className={classes["checkout--container"]}>
            <div>
              <label for="firstName">FirstName</label>
              <input
                id="firstName"
                type="text"
                placeholder="first Name"
                required
              />
            </div>
            <div>
              <label for="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                placeholder="first Name"
                required
              />
            </div>
            <div>
              <label for="email">Email</label>
              <input id="email" type="email" placeholder="Email address" />
            </div>
            <div>
              <label for="phoneNo">Phone Number</label>
              <input id="phoneNo" type="number" placeholder="Phone number" />
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
      </div>
    </div>
  );
};

export default Checkout;
