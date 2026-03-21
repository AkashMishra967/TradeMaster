import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://trademaster-backend-u6tl.onrender.com/login",
        formData,
        { withCredentials: true }  // ✅ session cookie ke liye zaroori
      );

      alert(res.data.message);

      // ❌ token wali lines hata di — session use ho raha hai
      // if (res.data.token) {
      //   localStorage.setItem("token", res.data.token);
      // }

      // ✅ Dashboard pe redirect
      window.location.href = "https://trademaster-4.onrender.com";

      setFormData({ email: "", password: "" });

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              marginBottom: "25px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px", color: "#777" }}>
          Don't have an account?{" "}
          <a href="/signup" style={{ color: "#4CAF50" }}>
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;