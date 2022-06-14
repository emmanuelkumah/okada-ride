import React, { useRef, useEffect } from "react";
import classes from "./Checkout.module.css";

const Checkout = ({ selectedMotor, setSelectedMotor, addBookingDetails }) => {
  let totals;

  useEffect(() => {
    setSelectedMotor((prevState) => {
      return {
        ...prevState,
        totalDays: totals,
      };
    });
  }, []);

  //calc cost of booking the selected motor
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const formRef = useRef();

  const {
    name,
    image,
    pickupStation,
    dropOffStation,
    pickupDate,
    dropoffDate,
    price,
    totalDays,
  } = selectedMotor;

  const getRideCost = () => {
    const pickupDuration = selectedMotor.pickupDate.split("-");
    const dropoffDuration = selectedMotor.dropoffDate.split("-");
    const pickupMonth = pickupDuration[1];
    const dropoffMonth = dropoffDuration[1];
    const pickupDay = pickupDuration[2];
    const dropoffDay = dropoffDuration[2];
    let month = Math.abs(+pickupMonth - +dropoffMonth);
    let day = Math.abs(+pickupDay - +dropoffDay);
    totals = month + day;
  };
  getRideCost();

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const phoneNum = phoneRef.current.value;

    //details to send to backend api
    const details = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNum: phoneNum,
      ...selectedMotor,
    };
    //send details to backend
    addBookingDetails(details);
    formRef.current.reset();
  };

  return (
    <div className={classes["checkout--row"]}>
      <div className={classes["checkout--col"]}>
        <h2 className={classes["form--caption"]}>Form Details</h2>
        <div className={classes["form--container"]}>
          <form
            className={classes["form--details"]}
            onSubmit={formSubmissionHandler}
            ref={formRef}
          >
            <div className={`${classes["input-container"]} ${classes.ic1}`}>
              <input
                type="text"
                placeholder=""
                className={classes.input}
                id="firstName"
                required
                ref={firstNameRef}
              />
              <div className={classes.cut}></div>
              <label htmlFor="firstName" className={classes.placeholder}>
                First Name
              </label>
            </div>
            <div className={`${classes["input-container"]} ${classes.ic2}`}>
              <input
                type="text"
                placeholder=""
                className={classes.input}
                id="lastName"
                required
                ref={lastNameRef}
              />
              <div className={classes.cut}></div>
              <label htmlFor="lastName" className={classes.placeholder}>
                Last Name
              </label>
            </div>
            <div className={`${classes["input-container"]} ${classes.ic2}`}>
              <input
                type="email"
                placeholder=""
                className={classes.input}
                id="email"
                required
                ref={emailRef}
              />
              <div className={classes.cut}></div>
              <label htmlFor="email" className={classes.placeholder}>
                Email
              </label>
            </div>
            <div className={`${classes["input-container"]} ${classes.ic2}`}>
              <input
                type="number"
                placeholder=""
                className={classes.input}
                id="phone"
                required
                ref={phoneRef}
              />
              <div className={classes.cut}></div>
              <label htmlFor="phone" className={classes.placeholder}>
                Phone
              </label>
            </div>
            <div className={classes["submit-btn"]}>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className={classes["checkout--col"]}>
        <h3>Motor Details</h3>
        <article>
          <p>{name}</p>
          <img src={image} alt="motor" />
          <p>Pickup Station: {pickupStation}</p>
          <p>Dropoff Station: {dropOffStation}</p>
          <p>Total Cost : {parseInt(price) * totalDays} </p>
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
