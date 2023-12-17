/* eslint-disable no-console */
const userRoute = require("express").Router();
const { User } = require("../models/index");
const bcrypt = require("bcrypt");

userRoute.get("/", async (req, res) => {
  try {
    const result = await User.find({});
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

userRoute.post("/signup", async (req, res) => {
  const newUser = req.body;
  if (newUser.password.length < 3) {
    return res.status(403).json({
      error: "`password` is shorter than the min allowed length (3).",
    });
  }
  const saltRounds = 10;
  try {
    const passwordHash = await bcrypt.hash(newUser.password, saltRounds);
    const response = await User.create({
      ...newUser,
      password: passwordHash,
      userType: "user",
      isDisabled: false,
      address: [],
      cart: [],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = userRoute;
