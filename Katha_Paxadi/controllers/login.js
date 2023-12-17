const loginRoute = require("express").Router();
const jwt = require("jsonwebtoken");
const { User } = require("../models/index");
const { SECRET_KEY } = require("../utils/config");
const bcrypt = require("bcrypt");

loginRoute.post("/", async (req, res) => {
  const { username, password, isEmail } = req.body;
  try {
    if (username && password) {
      const user = isEmail
        ? await User.findOne({ email: username })
        : await User.findOne({ username });
      if (user) {
        const passwordCorrect = await bcrypt.compare(password, user.password);
        if (passwordCorrect) {
          const userDetails = {
            id: user._id,
            username: user.username,
            userType: user.userType,
            isDisabled: user.isDisabled,
          };
          const token = jwt.sign(userDetails, SECRET_KEY);
          return res.status(200).json({ token, username: user.username });
        }
        return res.status(401).json({ error: "not authorized" });
      }
      return res.status(404).send({ error: "user not found" });
    }
    return res.status(500).json({ error: "no username or password" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = loginRoute;
