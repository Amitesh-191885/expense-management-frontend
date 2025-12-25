import React, { useState } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NoInternet from "../components/utils/NoInternet";

function MainOutlet() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  return isOnline ? (
    <div
      style={{
        minWidth: "99vw",
        minHeight: "100vh",
        maxWidth: "1920px",
        alignSelf: "center",
      }}
      className="flexColumnAlignCenter viewMaxWidth">
      <Header />
      <div
        style={{
          minHeight: "98vh",
          maxWidth: "1920px",
          alignSelf: "center",
          backgroundColor: "#F0F0F0",
        }}
        className="flexColumnAlignCenter width100per viewMaxWidth sectionSub">
        <Outlet />
      </div>
      <Footer />
    </div>
  ) : (
    <div>
      <NoInternet />
    </div>
  );
}

export default MainOutlet;
