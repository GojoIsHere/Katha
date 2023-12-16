import axios from "axios";
const cartURL = "http://localhost:3001/api/cart";

const setToken = () => {
  const token = JSON.parse(window.localStorage.getItem("userData"));
  if (token) {
    return token.token;
  }
};

export const getCartDetail = async () => {
  let token = setToken();
  const response = await axios.get(cartURL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const editCart = async (cartProd) => {
  let token = setToken();
  let response = await axios.put(
    `http://localhost:3001/api/cart/edit`,
    cartProd,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

export const deleteCartItems = async (skus) => {
  let token = setToken();
  let response = await axios.delete(`${cartURL}/remove/${skus}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const emptyCart = async () => {
  let token = setToken();
  let response = await axios.delete(`${cartURL}/remove/all`, {
    headers: { Authorization: `Bearer ${token}]` },
  });
  return response.data;
};
