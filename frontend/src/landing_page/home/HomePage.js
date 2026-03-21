import React from "react";
import { Link } from "react-router-dom";
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
      <div style={{ 
        textAlign: "center", 
        margin: "40px 0",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",  // ✅ mobile pe wrap hoga
        gap: "15px",       // ✅ spacing fix
        padding: "0 20px", // ✅ mobile pe side padding
      }}>
        <Link to="/signup">
          <button style={{
            padding: "10px 30px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
            width: "150px",  // ✅ fixed width
          }}>
            Signup
          </button>
        </Link>
        <Link to="/login">
          <button style={{
            padding: "10px 30px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
            width: "150px",  // ✅ fixed width
          }}>
            Login
          </button>
        </Link>
      </div>
    </>
  );
}

export default HomePage;