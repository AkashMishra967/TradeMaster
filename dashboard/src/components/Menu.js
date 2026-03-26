import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // ✅ FIX

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMobileMenuOpen(false);
    };

    checkMobile(); // ✅ FIX: mount pe turant check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsMobileMenuOpen(false);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

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
      <div className="menu-container" style={{ position: "relative" }}>
        <img src="logo.png" style={{ width: "50px" }} />

        {/* Hamburger - sirf mobile pe */}
        {isMobile && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              marginLeft: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "24px",
              height: "18px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0",
            }}
          >
            <span style={{ display: "block", width: "100%", height: "2px", background: "rgb(70,70,70)", borderRadius: "2px" }}></span>
            <span style={{ display: "block", width: "100%", height: "2px", background: "rgb(70,70,70)", borderRadius: "2px" }}></span>
            <span style={{ display: "block", width: "100%", height: "2px", background: "rgb(70,70,70)", borderRadius: "2px" }}></span>
          </button>
        )}

        {/* Desktop menu */}
        {!isMobile && (
          <div className="menus">
            <ul>
              {links.map((link) => (
                <li key={link.index}>
                  <Link style={{ textDecoration: "none" }} to={link.to} onClick={() => handleMenuClick(link.index)}>
                    <p className={selectedMenu === link.index ? activeMenuClass : menuClass}>
                      {link.label}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <hr />
            <div className="profile">
              <div className="avatar">ZU</div>
              <p className="username">USERID</p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile full screen menu */}
      {isMobile && isMobileMenuOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "#fff",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          paddingTop: "20px",
          boxSizing: "border-box",
          overflowY: "auto",
        }}>
          {/* Close button */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px 20px", borderBottom: "1px solid #f0f0f0" }}>
            <img src="logo.png" style={{ width: "50px" }} />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "rgb(70,70,70)" }}
            >
              ✕
            </button>
          </div>

          {/* Menu links */}
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

          {/* Profile */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "16px 24px", borderTop: "1px solid #f0f0f0", marginTop: "auto" }}>
            <div className="avatar">ZU</div>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "rgb(70,70,70)" }}>USERID</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;