const express = require("express");
const User = require("../models/user");
const { validationSingup } = require("../utils/validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authrouter = express.Router();

authrouter.post("/signup", async (req, res) => {
  try {
    validationSingup(req.body);
    const { firstName, lastName, email, password, age, gender } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashPassword,
      age,
      gender,
    });

    await user.save();
    res.status(201).send("user saved successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

authrouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Inavlid Credentials");
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = jwt.sign({ userId: user._id }, "sidhu@1371");
        res.cookie("token", token, { expires: new Date("2025-03-19") });
        res.status(200).send("Login success");
      } else {
        throw new Error("Inavlid Credentials");
      }
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

authrouter.post("/logout", async (req, res) => {
  try {
    res
      .cookie("token", null, { expires: new Date(0) })
      .send("Logout Done Successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = authrouter;
