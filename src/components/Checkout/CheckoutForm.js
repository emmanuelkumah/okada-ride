import React, { useRef, useState, useEffect } from "react";
import classes from "./Checkout.module.css";

const CheckoutForm = () => {
  const [fName, setFName] = useState("");

  const [fNameIsValid, setFNameIsValid] = useState(false);
  const [firstNameTouched, setFirstNameTouched] = useState(false);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    if (fNameIsValid) {
      console.log("first name input is valid");
    }
  }, [fNameIsValid]);

  const firstNameHandler = (event) => {
    setFName(event.target.value);
  };

  const handleBlur = (event) => {
    setFName(event.target.value);
  };
  console.log("blur is ", fName);
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setFirstNameTouched(true);
    //fName field is empty
    if (fName.trim() === "") {
      setFNameIsValid(false);
      return;
    }
    setFNameIsValid(true);
    const firstName = firstNameRef.current.value;
    console.log(firstName);
    //reset field
    setFName("");

    // const lastName = lastNameRef.current.value;
    // const email = emailRef.current.value;
    // const phoneNum = phoneRef.current.value;

    // console.log("form details", firstName, lastName, email, phoneNum);
  };

  //check user didnto enter firstName
  const firstNameIsInvalid = firstNameTouched && !fNameIsValid;

  const firstNameInputClasses = firstNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <div className={classes["form--container"]}>
      <form
        className={classes["form--details"]}
        onSubmit={formSubmissionHandler}
      >
        <div className={`${classes["input-container"]} ${classes.ic1}`}>
          <input
            type="text"
            placeholder=""
            className={classes.input}
            id="firstName"
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
