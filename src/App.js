import { useState } from "react";
import "./App.css";
import data from "./data";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MotorListing from "./components/MotorListing/MotorListing";
import MotorDetails from "./components/MotorDetails/MotorDetails";
import Checkout from "./components/Checkout/Checkout";
import NavBar from "./pages/Home/Sections/NavBar";
import FuelCalc from "./components/FuelCalc/FuelCalc";
import Footer from "./pages/Home/Sections/Footer/Footer";
import Error404 from "./pages/Error404";

const allPickUpLoc = [...new Set(data.map((item) => item.pickupLocation))];
const allDropoffLoc = [...new Set(data.map((item) => item.dropoffLocation))];
const allBrands = [...new Set(data.map((item) => item.brand))];

function App() {
  const [motorData, setMotorData] = useState(data);
  const [brands, setBrands] = useState(allBrands);
  const [pickupLoc, setPickupLoc] = useState(allPickUpLoc);
  const [dropOffLoc, setdropOffLoc] = useState(allDropoffLoc);

  const filterItems = (motorBrand, pickupLoc, dropoffLoc) => {
    const newItems = data.filter((item) => {
      return (
        item.brand === motorBrand &&
        (item.pickupLocation === pickupLoc ||
          item.dropoffLocation === dropoffLoc)
      );
    });

    // console.log(newItems);
    // update the motorData
    setMotorData(newItems);
  };

  const getMotorDetails = (id) => {
    return motorData.find((motor) => motor.id === id);
  };

  const getFormDetails = (srchFields) => {
    const { brand, pickUp, dropOff, pickupDate, dropoffDate } = srchFields;
    console.log(`day to pickup ${pickupDate}, day to dropoff ${dropoffDate}`);
    //convert the date into numbers
    // calculae the number of days
    // use it to calculate price to charge
    filterItems(brand, pickUp, dropOff);
  };

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="motors"
            element={
              <MotorListing
                motorData={motorData}
                getFormDetails={getFormDetails}
                dropOffLoc={dropOffLoc}
                pickupLoc={pickupLoc}
                brands={brands}
              />
            }
          />
          <Route
            path="/motors/:motorId"
            element={<MotorDetails getMotorDetails={getMotorDetails} />}
          />
          <Route path="/motors/:motorId/checkout" element={<Checkout />} />
          <Route path="tools" element={<FuelCalc />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
