const express = require("express");
const userRouter = express.Router();
const User = require("../models/user");
const { userAuth } = require("../middlewares/userAuth");
const { validationEditProfile } = require("../utils/validation");

userRouter.get("/viewprofile", userAuth, async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await User.findById(userId);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

userRouter.patch("/editprofile", userAuth, async (req, res) => {
  try {
    if (!validationEditProfile(req.body)) {
      throw new Error("Bad Request For Edit");
    }
    
    const loggedInUser = await User.findById(req.user.userId);
    Object.keys(req.body).forEach((key)=>loggedInUser[key] = req.body[key]);
    await loggedInUser.save();
    res.status(200).send({
      message:
        `${loggedInUser.firstName}` + " profile updated successfully ...",
      data: loggedInUser,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});



module.exports = userRouter;
