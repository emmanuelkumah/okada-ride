import React from "react";
import { BookingForm } from "../components/BookingForm/BookingForm";
import Features from "./Home/Sections/Features";
import { HeroSection } from "./Home/Sections/Hero";
import NavBar from "./Home/Sections/NavBar";
import About from "./Home/Sections/About";
import FeatureTwo from "./Home/Sections/FeatureTwo/FeatureTwo";
import Footer from "./Home/Sections/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <BookingForm />
      <main>
        <Features />
        <About />
        <FeatureTwo />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
