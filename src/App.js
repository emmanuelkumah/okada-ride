import { useState } from "react";
import "./App.css";
import data from "./data";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MotorListing from "./components/MotorListing/MotorListing";
import MotorDetails from "./components/MotorDetails/MotorDetails";

function App() {
  //pass the motordata from the parent component to the chuld component
  const [motorData, setMotorData] = useState(data);

  let formData;
  // const { brand } = formData;
  const getMotorDetails = (id) => {
    return motorData.find((motor) => motor.id === id);
  };

  const getFormDetails = (result) => {
    console.log("form details", result);
    formData = result;
    console.log("selected brand", formData.brand);
  };

  // //filter listing
  //  select the brand from the submit details and use that to filter the motors
  //update the motor data to display the new listing
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
