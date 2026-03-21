require("dotenv").config();

const express = require("express"); // ✅ missing tha
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");

// ✅ Routes import
const authRoutes = require("./routes/authRoutes");
const dataRoutes = require("./routes/dataRoutes");
const orderRoutes = require("./routes/orderRoutes");

// ✅ App initialize
const app = express();

// ✅ Middleware
app.use(express.json());

app.use(
  cors({
    origin: ["https://trademaster-5.onrender.com", "https://trademaster-4.onrender.com"],
    credentials: true,
  })
);

app.set("trust proxy", 1);

app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: true,       // 🔥 HTTPS required
      sameSite: "none",   // 🔥 cross-origin fix
    },
  })
);

// ✅ Routes use
app.use(authRoutes);
app.use(dataRoutes);
app.use(orderRoutes);

// ✅ MongoDB connect
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

// ✅ Server start
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});