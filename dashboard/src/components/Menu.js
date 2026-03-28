import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsMobileMenuOpen(false);
  };

  const links = [
    { to: "/", label: "Dashboard", index: 0 },
    { to: "/orders", label: "Orders", index: 1 },
    { to: "/holdings", label: "Holdings", index: 2 },
    { to: "/positions", label: "Positions", index: 3 },
    { to: "/funds", label: "Funds", index: 4 },
    { to: "/apps", label: "Apps", index: 6 },
  ];

  return (
    <>
      <div style={{
        flexBasis: isMobile ? "0" : "68%",
        flexGrow: isMobile ? 1 : 0,
        height: "100%",
        padding: isMobile ? "8px 12px" : "10px 20px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <img src="logo.png" style={{ width: "50px" }} alt="logo" />

        {/* Hamburger - sirf mobile pe dikhega React se */}
        {isMobile && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "30px",
              height: "22px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0",
              marginLeft: "auto",
            }}
          >
            <span style={{ display: "block", width: "100%", height: "3px", background: "rgb(70,70,70)", borderRadius: "2px" }}></span>
            <span style={{ display: "block", width: "100%", height: "3px", background: "rgb(70,70,70)", borderRadius: "2px" }}></span>
            <span style={{ display: "block", width: "100%", height: "3px", background: "rgb(70,70,70)", borderRadius: "2px" }}></span>
          </button>
        )}

        {/* Desktop menu - sirf desktop pe dikhega React se */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
            <ul style={{ listStyleType: "none", display: "flex", margin: 0, padding: 0 }}>
              {links.map((link) => (
                <li key={link.index} style={{ display: "inline-block", marginRight: "30px" }}>
                  <Link style={{ textDecoration: "none" }} to={link.to} onClick={() => handleMenuClick(link.index)}>
                    <p style={{
                      fontSize: "0.8rem",
                      fontWeight: "400",
                      color: selectedMenu === link.index ? "rgb(245, 104, 52)" : "rgb(70, 70, 70)",
                      margin: 0,
                    }}>
                      {link.label}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <hr style={{ borderLeft: "0.8px solid rgb(243,242,242)", height: "30px", margin: "0 10px" }} />
            <div style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
              <div style={{
                width: "30px", height: "30px", fontSize: "0.7rem", fontWeight: "400",
                color: "rgb(221,139,221)", borderRadius: "100%", display: "flex",
                justifyContent: "center", alignItems: "center",
                background: "rgb(252,229,252)", marginRight: "8px",
              }}>ZU</div>
              <p style={{ fontSize: "0.8rem", fontWeight: "300", margin: 0 }}>USERID</p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile fullscreen menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: "fixed",
          top: 0, left: 0,
          width: "100vw",
          height: "100vh",
          background: "#fff",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          overflowY: "auto",
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 20px",
            borderBottom: "1px solid #f0f0f0"
          }}>
            <img src="logo.png" style={{ width: "50px" }} alt="logo" />
            <button onClick={() => setIsMobileMenuOpen(false)} style={{
              background: "none", border: "none",
              fontSize: "1.5rem", cursor: "pointer", color: "rgb(70,70,70)"
            }}>✕</button>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {links.map((link) => (
              <li key={link.index} style={{ borderBottom: "1px solid #f5f5f5" }}>
                <Link
                  style={{ textDecoration: "none", display: "block", padding: "16px 24px" }}
                  to={link.to}
                  onClick={() => handleMenuClick(link.index)}
                >
                  <p style={{
                    margin: 0,
                    fontSize: "1.1rem",
                    fontWeight: selectedMenu === link.index ? "500" : "400",
                    color: selectedMenu === link.index ? "rgb(245, 104, 52)" : "rgb(70, 70, 70)",
                  }}>
                    {link.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <div style={{
            display: "flex", alignItems: "center", gap: "10px",
            padding: "16px 24px", borderTop: "1px solid #f0f0f0", marginTop: "auto"
          }}>
            <div style={{
              width: "30px", height: "30px", fontSize: "0.7rem",
              color: "rgb(221,139,221)", borderRadius: "100%", display: "flex",
              justifyContent: "center", alignItems: "center", background: "rgb(252,229,252)"
            }}>ZU</div>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "rgb(70,70,70)" }}>USERID</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;