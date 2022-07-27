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

function App() {
  const allPickUpLoc = [...new Set(data.map((item) => item.pickupLocation))];
  const allDropoffLoc = [...new Set(data.map((item) => item.dropoffLocation))];
  const allBrands = [...new Set(data.map((item) => item.brand))];

  const [motorData, setMotorData] = useState(data);
  const [selectedMotor, setSelectedMotor] = useState({
    name: "",
    brand: "",
    image: "",
    pickupStation: "",
    dropOffStation: "",
    pickupDate: "",
    dropoffDate: "",
    price: "",
    totalDays: 1,
  });
  const [isFormSumbit, setIsFormSubmit] = useState(false);

  useEffect(() => {
    fetchMotor();
  }, [selectedMotor]);

  //get motor details
  function fetchMotor() {
    if (selectedMotor.brand !== "") {
      const fetchedData = data.filter((motor) => {
        return (
          motor.brand === selectedMotor.brand &&
          (motor.pickupLocation === selectedMotor.pickupStation ||
            motor.dropoffLocation === selectedMotor.dropOffStation)
        );
      });
      setMotorData(fetchedData);
    }
  }

  const getMotorDetails = (id) => {
    let selectedMotrDetls = motorData.find((motor) => motor.id === id);

    return selectedMotrDetls;
  };

  //send data to backend
  const addBookingDetails = async (bookingDtls) => {
    const response = await fetch(
      "https://okadaride-c9652-default-rtdb.firebaseio.com/customerDetails.json",
      {
        method: "POST",
        body: JSON.stringify(bookingDtls),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("data from server", data);
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
                dropOffLoc={allDropoffLoc}
                pickupLoc={allPickUpLoc}
                brands={allBrands}
                setSelectedMotor={setSelectedMotor}
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
                setSelectedMotor={setSelectedMotor}
                selectedMotor={selectedMotor}
                setIsFormSubmit={setIsFormSubmit}
                isFormSubmit={isFormSumbit}
                addBookingDetails={addBookingDetails}
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
