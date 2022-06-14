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
    totalDays: 0,
  });

  useEffect(() => {
    fetchMotor();
  }, [selectedMotor]);

  function fetchMotor() {
    let fetchedData;
    if (selectedMotor.brand !== "") {
      fetchedData = data.filter((motor) => {
        return motor.brand === selectedMotor.brand;
      });
      setMotorData(fetchedData);
    }
  }

  const getMotorDetails = (id) => {
    let selectedMotrDetls = motorData.find((motor) => motor.id === id);

    return selectedMotrDetls;
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
  };

  const sendSubmittedData = (formData) => {
    console.log(formData);
  };

  //send data to backend
  const addBookingDetails = async (bookingDtls) => {
    // console.log("value", bookingDtls);
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
                selectedMotor={selectedMotor}
                getBookingCost={getBookingCost}
                sendSubmittedData={sendSubmittedData}
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
