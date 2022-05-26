import React from "react";
import { BookingForm } from "../components/BookingForm/BookingForm";
import { HeroSection } from "./Home/Sections/Hero";
import NavBar from "./Home/Sections/NavBar";
// import Navigation from "./Home/Sections/Navigation";

const HomePage = () => {
  return (
    <>
      <div>
        {/* <Navigation /> */}
        <NavBar />
        <HeroSection />
        <BookingForm />
      </div>
      <main>{/* <h2>Main content goes hers</h2> */}</main>
      <footer>{/* <h2>Footer content goes here</h2> */}</footer>
    </>
  );
};

export default HomePage;
