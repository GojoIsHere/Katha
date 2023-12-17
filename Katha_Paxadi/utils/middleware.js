const jwt = require("jsonwebtoken");
const { User } = require("../models/index");
const logger = require("./logger");
const { SECRET_KEY } = require("../utils/config");

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

const requestLogger = (req, res, next) => {
  logger.info("Method:", req.method);
  logger.info("Path:  ", req.path);
  logger.info("Body:  ", req.body);
  logger.info("---");
  next();
};

const tokenExtractor = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "missing token" });
  }
  const token = req.headers.authorization.split(" ")[1];
  req.token = token;
  next();
};

const userExtractor = async (req, res, next) => {
  try {
    if (req.token) {
      const decodedToken = jwt.verify(req.token, SECRET_KEY);
      if (!decodedToken.id) {
        return res.status(401).json({ error: "token invalid" });
      }
      req.userId = decodedToken.id;
      req.user = await User.findById(decodedToken.id);
      return next();
    }
    req.user = null;
    return next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  unknownEndpoint,
  requestLogger,
  tokenExtractor,
  userExtractor,
};
