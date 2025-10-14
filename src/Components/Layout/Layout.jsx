import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../UserContext/UserContext";
import { Offline } from "react-detect-offline";

export default function Layout() {
  let { setUserToken } = useContext(UserContext);
  if (localStorage.getItem("userToken") !== null) {
    setUserToken(localStorage.getItem("userToken"));
  }
  return (
    <div>
      <Navbar />
      <Offline>
        <div className="shadow p-3 mt-3 me-4 bg-warning position-absolute end-0">
          <i className="fas fa-wifi"></i> Check Your Internet
        </div>
      </Offline>
      <div className="container py-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
