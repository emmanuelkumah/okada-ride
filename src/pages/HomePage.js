import React from "react";
import { BookingForm } from "../components/BookingForm/BookingForm";
import Features from "./Home/Sections/Features";
import { HeroSection } from "./Home/Sections/Hero";
import NavBar from "./Home/Sections/NavBar";
// import Navigation from "./Home/Sections/Navigation";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <BookingForm />
      <main>
        <Features />
      </main>
      <footer>
        <h2>Footer content goes here</h2>{" "}
      </footer>
    </>
  );
};

export default HomePage;
