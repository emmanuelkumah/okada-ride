import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
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
    <div className={classes["review-container"]}>
      <img src={image} alt="author" className={classes["review-author"]} />
      <article className={classes["review-details"]}>
        <div className={classes["quote-icon"]}>
          <FaQuoteLeft />
        </div>

        <p>{text}</p>
        <hr />
        <h4>{name}</h4>
        <div className={classes["btn-container"]}>
          <button className={classes["prev-btn"]} onClick={handlePrevReview}>
            <FaChevronLeft />
          </button>
          <button className={classes["next-btn"]} onClick={handleNextReview}>
            <FaChevronRight />
          </button>
        </div>
      </article>
    </div>
  );
};

export default ClientReview;
