require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo"); // ✅ ADD THIS

const authRoutes = require("./routes/authRoutes");
const dataRoutes = require("./routes/dataRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

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
    secret: process.env.SESSION_SECRET, // ✅ CHANGE THIS
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({          // ✅ ADD THIS
      mongoUrl: process.env.MONGO_URL,
    }),
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    },
  })
);

app.use(authRoutes);
app.use(dataRoutes);
app.use(orderRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});