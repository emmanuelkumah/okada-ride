import { useState } from "react";
import "./App.css";
import data from "./data";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MotorListing from "./components/MotorListing/MotorListing";
import MotorDetails from "./components/MotorDetails/MotorDetails";

const allPickUpLoc = [...new Set(data.map((item) => item.pickupLocation))];
const allDropoffLoc = [...new Set(data.map((item) => item.dropoffLocation))];
const allBrands = [...new Set(data.map((item) => item.brand))];

function App() {
  const [motorData, setMotorData] = useState(data);
  const [brands, setBrands] = useState(allBrands);
  const [pickupLoc, setPickupLoc] = useState(allPickUpLoc);
  const [dropOffLoc, setdropOffLoc] = useState(allDropoffLoc);

  const filterItems = (motorBrand) => {
    // console.log("the motor brand is", motorBrand);
    const ans = data.filter((item) => {
      return item.brand === motorBrand;
    });

    console.log("answer is", ans);
  };

  const getMotorDetails = (id) => {
    return motorData.find((motor) => motor.id === id);
  };

  const getFormDetails = (srchFields) => {
    console.log("brand", srchFields.brand);
    // console.log("selected brand", formData.brand);
    filterItems(srchFields.brand);
  };

  return (
    <>
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

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h1>There's nothing here!</h1>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
