import React from "react";
import { useParams } from "react-router-dom";

const MotorDetails = () => {
  const params = useParams();

  return (
    <div>
      <h2>Motor Details page: {params.motorId} </h2>
    </div>
  );
};

export default MotorDetails;
