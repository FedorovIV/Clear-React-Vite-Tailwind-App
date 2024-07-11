import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div style={{ width: "100px", height: "100px", background: "red" }}>
        Root
      </div>
      <Outlet />
    </>
  );
};

export default Root;
