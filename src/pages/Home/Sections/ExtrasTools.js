import React from "react";
import { AiOutlineInsurance } from "react-icons/ai";
import { FaMotorcycle } from "react-icons/fa";
import { GiFullMotorcycleHelmet, GiPriceTag } from "react-icons/gi";
import classes from "./ExtraTools.module.css";

const ExtrasTools = () => {
  return (
    <>
      <div className={classes["et--row"]}>
        <div className={classes["et--col"]}>
          <h2>
            <span className={classes["et--icon"]}>
              <GiFullMotorcycleHelmet />
            </span>
            Free Helmet
          </h2>
        </div>
        <div className={classes["et--col"]}>
          <h2>
            <span className={classes["et--icon"]}>
              <AiOutlineInsurance />
            </span>
            Insurance Policy
          </h2>
        </div>
        <div className={classes["et--col"]}>
          <h2>
            <span className={classes["et--icon"]}>
              <GiPriceTag />
            </span>
            No Hidden Charges
          </h2>
        </div>
        <div className={classes["et--col"]}>
          <h2>
            <span className={classes["et--icon"]}>
              <FaMotorcycle />
            </span>
            Carry Extra Passenger
          </h2>
        </div>
      </div>
    </>
  );
};

export default ExtrasTools;
