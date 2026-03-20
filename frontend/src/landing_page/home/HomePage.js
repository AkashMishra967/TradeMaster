import React from "react";
import { Link } from "react-router-dom"; // 🔥 router link
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";
import Education from "./Education";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />

      {/* ✅ Signup / Login buttons */}
      <div style={{ textAlign: "center", margin: "40px 0" }}>
        <Link to="/signup">
          <button
            style={{
              padding: "10px 20px",
              marginRight: "15px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Signup
          </button>
        </Link>
        <Link to="/login">
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Login
          </button>
        </Link>
      </div>
    </>
  );
}

export default HomePage;