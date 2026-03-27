import React, { useEffect } from "react";
import TopBar from "./TopBar";
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

  // 🔥 AUTH CHECK (SESSION BASED)
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
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <TopBar />

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