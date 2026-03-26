import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 🔥 screen check
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🔥 AUTH CHECK
  useEffect(() => {
    axios.get("https://trademaster-backend-u6tl.onrender.com/me", {
      withCredentials: true
    })
    .then((res) => {
      console.log("User logged in:", res.data);
    })
    .catch((err) => {
      console.log("Not logged in");
      window.location.href = "https://trademaster-5.onrender.com";
    });
  }, []);

  return (
    <div className="dashboard-container">

      {/* 🔥 MOBILE pe WatchList hide */}
      {!isMobile && (
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
      )}

      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>

    </div>
  );
};

export default Dashboard;