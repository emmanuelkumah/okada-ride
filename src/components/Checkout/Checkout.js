import React from "react";
import classes from "./Checkout.module.css";
import CheckoutForm from "./CheckoutForm";

const Checkout = ({
  selectedMotor,
  getBookingCost,
  totalDays,

  addBookingDetails,
}) => {
  //calc cost of booking the selected motor
  getBookingCost(selectedMotor);

  const {
    name,
    image,
    pickupStation,
    dropOffStation,
    pickupDate,
    dropoffDate,
    price,
  } = selectedMotor;
  const totalPrice = +price * totalDays;
  //pass booking details
  const bookingDetls = {
    name: name,
    pickupStation: pickupStation,
    dropOffStation: dropOffStation,
    pickupDate: pickupDate,
    dropoffDate: dropoffDate,
    totalPrice: totalPrice,
  };
  //addBookingDetails(bookingDetls);

  return (
    <div className={classes["checkout--row"]}>
      <div className={classes["checkout--col"]}>
        <h2 className={classes["form--caption"]}>Form Details</h2>
        <CheckoutForm addBookingDetails={addBookingDetails} />
      </div>
      <div className={classes["checkout--col"]}>
        <h3>Motor Details</h3>
        <article>
          <p>{name}</p>
          <img src={image} alt="motor" />
          <p>Pickup Station: {pickupStation}</p>
          <p>Dropoff Station: {dropOffStation}</p>
          <p>Total Cost : {`${totalPrice ? totalPrice : price} GHS`}</p>
          <div>
            <p>
              Pickup Date:{" "}
              {`${pickupDate ? pickupDate : "Available on request"}`}
            </p>
            <p>
              Drop off Date:{" "}
              {`${dropoffDate ? dropoffDate : "Available on request"}  `}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Checkout;
