import React, { useState } from "react";
import classes from "./SingleFaq.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleFaq = ({ title, info }) => {
  const [showAns, setShowAns] = useState(false);
  return (
    <div>
      <article className={classes["faq-container"]}>
        <div className={classes["faq-question"]}>
          <h2>{title}</h2>
          <div onClick={() => setShowAns(!showAns)}>
            {showAns ? (
              <AiOutlineMinus className={classes["faq-icon"]} />
            ) : (
              <AiOutlinePlus className={classes["faq-icon"]} />
            )}
          </div>
        </div>

        {showAns && <p className={classes["faq-info"]}>{info}</p>}
      </article>
    </div>
  );
};

export default SingleFaq;
