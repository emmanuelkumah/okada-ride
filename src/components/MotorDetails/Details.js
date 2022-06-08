import React from "react";
import { Outlet } from "react-router-dom";

export const Details = () => {
  return (
    <div>
      <h2>Details page</h2>
      <Outlet />
    </div>
  );
};
