import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { Faq } from "../FAQ/Faq";
import classes from "./ClientReview.module.css";
import reviews from "./ClientReviewData";

const ClientReview = () => {
  const [index, setIndex] = useState(0);

  const { name, image, text } = reviews[index];

  //check if num exist
  const checkNum = (num) => {
    if (num > reviews.length - 1) {
      return 0;
    } else if (num < 0) {
      return reviews.length - 1;
    } else {
      return num;
    }
  };

  const handleNextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      //checknumber
      return checkNum(newIndex);
    });
  };

  const handlePrevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNum(newIndex);
    });
  };
  return (
    <div className={classes["feature-row"]}>
      <div className={classes["feature-col"]}>
        <Faq />
      </div>
      <div className={classes["feature-col"]}>
        <section>
          <div className={classes["review-container"]}>
            <div className={classes["img-container"]}>
              <img
                src={image}
                alt="reviewImg"
                className={classes["review-img"]}
              />

              <h3 className={classes["review-author"]}>{name}</h3>
            </div>

            <p className={classes["review-desc"]}>
              <span className={classes["quote-icon"]}>
                <FaQuoteLeft />
              </span>
              {text}
            </p>
          </div>
          <div className={classes["button-container"]}>
            <button className={classes["prev-btn"]}>
              <FaChevronLeft onClick={handlePrevReview} />
            </button>
            <button className={classes["next-btn"]}>
              <FaChevronRight onClick={handleNextReview} />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClientReview;
