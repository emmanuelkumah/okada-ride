import { useState, useEffect } from "react";
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
  const [selectedMotor, setSelectedMotor] = useState({
    name: "",
    image: "",
    pickupStation: "",
    dropOffStation: "",
    price: "",
  });
  console.log("selected details is", selectedMotor);
  const [checkout, setCheckout] = useState({
    name: "",
    img: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    dropoffDate: "",
  });

  console.log("selected motor", selectedMotor);
  useEffect(() => {}, []);

  const filterItems = (motorBrand, pickupLoc, dropoffLoc) => {
    const newItems = data.filter((item) => {
      return (
        item.brand === motorBrand &&
        (item.pickupLocation === pickupLoc ||
          item.dropoffLocation === dropoffLoc)
      );
    });

    setMotorData(newItems);
  };
  // const viewSelectedMotor = (motor) => {
  //   console.log(motor);
  //   //update the motor details

  // };
  const getMotorDetails = (id) => {
    let selectedMotrDetls = motorData.find((motor) => motor.id === id);

    return selectedMotrDetls;
    //  viewSelectedMotor(selectedMotrDetls);
    // setSelectedMotor((prevState) => {
    //   return {
    //     ...prevState,
    //     name: selectedMotrDetls.name,
    //     image: selectedMotrDetls.img,
    //     price: selectedMotrDetls.price,
    //     pickupStation: selectedMotrDetls.pickupLocation,
    //     dropOffStation: selectedMotrDetls.dropoffLocation,
    //   };
    // });
  };

  const getCheckoutDetails = (pickupdate, dropoffdate) => {
    //update checkout details
    setCheckout((prevState) => {
      return { ...prevState, pickupDate: pickupdate, dropoffDate: dropoffdate };
    });
  };

  const getFormDetails = (srchFields) => {
    const { brand, pickUp, dropOff, pickupDate, dropoffDate } = srchFields;

    getCheckoutDetails(pickupDate, dropoffDate);
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
            element={
              <MotorDetails
                getMotorDetails={getMotorDetails}
                setSelectedMotor={setSelectedMotor}
              />
            }
          />
          <Route
            path="/motors/:motorId/checkout"
            element={<Checkout selectedMotor={selectedMotor} />}
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
