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
       
      </div>
    </>
  );
}

export default HomePage;