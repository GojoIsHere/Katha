import axios from "axios";
const signUpURL = "http://localhost:3001/api/user/signup";
const loginURL = "http://localhost:3001/api/login";

export const signUpService = async (credentials) => {
  const response = await axios.post(signUpURL, credentials);
  return response.data;
};

export const loginService = async (credentials) => {
  const response = await axios.post(loginURL, credentials);
  return response.data;
};
