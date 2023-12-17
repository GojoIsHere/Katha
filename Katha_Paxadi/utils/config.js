require("dotenv").config();
const OpenAI = require("openai");

const PORT = process.env.PORT || 3001;
const DB_URL = process.env.DB_URL;
const SECRET_KEY = process.env.SECRET_KEY;
const API_KEY = process.env.OPENAI_API_KEY;


module.exports = { PORT, DB_URL, SECRET_KEY, API_KEY };
