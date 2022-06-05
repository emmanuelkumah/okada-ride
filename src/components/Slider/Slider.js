import React, { useState } from "react";
import slides from "./slideData";
import classes from "./Slider.module.css";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import SearchRide from "../SeachRide/SearchRide";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const { heading, text } = slides[index];

  const checkNumber = (num) => {
    if (num > slides.length - 1) {
      return 0;
    } else if (num < 0) {
      return slides.length - 1;
    } else {
      return num;
    }
  };

  const nextSlideText = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevSlideText = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div>
      <article className={classes["slide-banner"]}>
        <div className={classes["slide-arrLeft"]} onClick={prevSlideText}>
          <BsChevronDoubleLeft />
        </div>
        <div className={classes["slide-content"]}>
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>

        <div className={classes["slide-arrRight"]} onClick={nextSlideText}>
          <BsChevronDoubleRight />
        </div>
      </article>
      <SearchRide />
    </div>
  );
};

export default Slider;
