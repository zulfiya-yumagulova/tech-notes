import React from "react";
import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";

function DashLayouts() {
  return (
    <>
      <DashHeader />
      <div className="dash-container">
        <Outlet />
      </div>
    </>
  );
}

export default DashLayouts;
