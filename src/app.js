const express = require("express");
const app = express();
const { connectDB } = require("./config/database");
app.use(express.json());
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const requestRoutes = require("./routes/requestRoutes");

app.use("/", authRoutes);
app.use("/", profileRoutes);
app.use("/", requestRoutes);

connectDB()
  .then(() => {
    console.log("Database connected...!");
    app.listen(7777, () => {
      console.log("Example app listening on port 7777...!");
    });
  })
  .catch((err) => console.log(err));
