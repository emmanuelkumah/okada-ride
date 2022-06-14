import React, { useRef } from "react";
import classes from "./Checkout.module.css";

const CheckoutForm = ({ addBookingDetails }) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const formRef = useRef();

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const phoneNum = phoneRef.current.value;

    console.log("form details", firstName, lastName, email, phoneNum);
    const details = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNum: phoneNum,
    };
    //send details to backend
    addBookingDetails(details);
    formRef.current.reset();
  };

  //check user didnto enter firstName

  return (
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
  );
};

export default CheckoutForm;
