import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";

const PrivateRoute = () => {
  const jwt = localStorage.getItem("token");
  const location = useLocation();

  if (!jwt) {
    return <Navigate to="/login" replace={true} state={{ from: location }} />;
  }
  return <Outlet />;
};

export default observer(PrivateRoute);
