import React from "react";
import FaqData from "./FaqData";
import SingleFaq from "./SingleFaq";
import classes from "./SingleFaq.module.css";

export const Faq = () => {
  return (
    <div>
      <h2 className={classes["faq-Caption"]}>Get all your question answered</h2>

      {FaqData.map((faq) => (
        <SingleFaq key={faq.id} {...faq} />
      ))}
    </div>
  );
};
