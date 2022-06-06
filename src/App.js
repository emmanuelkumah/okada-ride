import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MotorListing from "./components/MotorListing/MotorListing";
import MotorDetails from "./components/MotorDetails/MotorDetails";
function App() {
  //pass the motordata from the parent component to the chuld component

  const getMotorDetails = () => {
    //go through all motors
    //find the one who id is equal to the id received from the params
    //return that details
    //pass the details to the MotorDetail component
    //show the details
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="motors" element={<MotorListing />} />
        <Route path="/motors/:motorId" element={<MotorDetails />} />

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
