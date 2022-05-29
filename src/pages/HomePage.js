import React from "react";
import { BookingForm } from "../components/BookingForm/BookingForm";
import Features from "./Home/Sections/Features";
import { HeroSection } from "./Home/Sections/Hero";
import NavBar from "./Home/Sections/NavBar";
import About from "./Home/Sections/About";
// import Navigation from "./Home/Sections/Navigation";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <BookingForm />
      <main>
        <Features />
        <About />
      </main>
      <footer>
        <h2>Footer content goes here</h2>{" "}
      </footer>
    </>
  );
};

export default HomePage;
