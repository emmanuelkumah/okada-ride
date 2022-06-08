import React from "react";
import Features from "./Home/Sections/Features";
import { HeroSection } from "./Home/Sections/Hero";
import About from "./Home/Sections/About";
import FeatureTwo from "./Home/Sections/FeatureTwo/FeatureTwo";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div>
        <Features />
        <About />
        <FeatureTwo />
      </div>
    </>
  );
};

export default HomePage;
