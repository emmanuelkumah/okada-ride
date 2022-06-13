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

function App() {
  const allPickUpLoc = [...new Set(data.map((item) => item.pickupLocation))];
  const allDropoffLoc = [...new Set(data.map((item) => item.dropoffLocation))];
  const allBrands = [...new Set(data.map((item) => item.brand))];

  const [motorData, setMotorData] = useState(data);
  const [totalDays, setTotalDays] = useState(0);
  const [selectedMotor, setSelectedMotor] = useState({
    name: "",
    image: "",
    pickupStation: "",
    dropOffStation: "",
    pickupDate: "",
    dropoffDate: "",
    price: "",
  });

  //filter motors
  const filterMotors = (motorBrand, pickupLoc, dropoffLoc) => {
    const filteredMotors = data.filter((item) => {
      return (
        item.brand === motorBrand &&
        (item.pickupLocation === pickupLoc ||
          item.dropoffLocation === dropoffLoc)
      );
    });

    setMotorData(filteredMotors);
  };

  const getMotorDetails = (id) => {
    let selectedMotrDetls = motorData.find((motor) => motor.id === id);

    return selectedMotrDetls;
  };

  const getCheckoutDetails = (pickupdate, dropoffdate) => {
    //update checkout details
    setSelectedMotor((prevState) => {
      return { ...prevState, pickupDate: pickupdate, dropoffDate: dropoffdate };
    });
  };

  const getFormDetails = (srchFields) => {
    const { brand, pickUp, dropOff, pickupDate, dropoffDate } = srchFields;
    //pass selected date
    getCheckoutDetails(pickupDate, dropoffDate);

    //filter motors based on the selected fields
    filterMotors(brand, pickUp, dropOff);
  };

  const getBookingCost = (checkoutDetails) => {
    const { pickupDate, dropoffDate } = checkoutDetails;

    const pickupDuration = pickupDate.split("-");
    const dropoffDuration = dropoffDate.split("-");
    const pickupMonth = pickupDuration[1];
    const dropoffMonth = dropoffDuration[1];
    const pickupDay = pickupDuration[2];
    const dropoffDay = dropoffDuration[2];
    let month = Math.abs(+pickupMonth - +dropoffMonth);
    let day = Math.abs(+pickupDay - +dropoffDay);
    const totalDays = month + day;

    setTotalDays(totalDays);
    // console.log(`pickupMonth: ${month},day: ${day}. total days: ${totalDays}}`);
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
                dropOffLoc={allDropoffLoc}
                pickupLoc={allPickUpLoc}
                brands={allBrands}
              />
            }
          />
          <Route
            path="/motors/:motorId"
            element={
              <MotorDetails
                getMotorDetails={getMotorDetails}
                setSelectedMotor={setSelectedMotor}
              />
            }
          />
          <Route
            path="/motors/:motorId/checkout"
            element={
              <Checkout
                selectedMotor={selectedMotor}
                getBookingCost={getBookingCost}
                totalDays={totalDays}
              />
            }
          />
          <Route path="tools" element={<FuelCalc />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
