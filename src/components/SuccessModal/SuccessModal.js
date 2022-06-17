import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import classes from "./SuccessModal.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = () => {
  return (
    <div>
      <section className={classes.modal}>
        <h2 className={classes["m--heading"]}> Success Message</h2>
        <div className={classes["m--subHeading"]}>
          <p>Thank you for choosing to ride with us</p>
          <p>A representative will get in touch with you soon</p>
          <p>Happy riding!</p>
          <Link to="/" className={classes["m--btn"]}>
            <button>Return Home</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

const SuccessModal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop--root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("modal--root")
      )}
    </>
  );
};

export default SuccessModal;
