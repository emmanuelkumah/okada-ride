import React from "react";
import { Faq } from "./FAQ/Faq";
import ClientReview from "./ClientReview/ClientReview";
import classes from "./FeatureTwo.module.css";

const FeatureTwo = () => {
  return (
    <div className={classes["feature-container"]}>
      <div className={classes["feature-row"]}>
        <div className={classes["feature-col"]}>
          <Faq />
        </div>
        <div className={classes["feature-col"]}>
          <ClientReview />
        </div>
      </div>
    </div>
  );
};

export default FeatureTwo;
