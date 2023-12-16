import axios from "axios";
const baseURL = "http://localhost:3001/api/products";
const categoryURL = "http://localhost:3001/api/products/category";
const itemDetailURL = "http://localhost:3001/api/products/items";

export const getAllProducts = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

export const getCategoryProducts = async (categoryName) => {
  const response = await axios.get(`${baseURL}/${categoryName}`);
  return response.data;
};

export const getCategoryList = async () => {
  const response = await axios.get(categoryURL);
  return response.data;
};

export const getItemDetail = async (sku) => {
  console.log("this is sku332", sku);
  const response = await axios.get(`${itemDetailURL}/${sku}`);
  return response.data;
};

export const getRecommendedItems = async (sku) => {
  // console.log("this is sku332", sku);
  const response = await axios.get(`${baseURL}/recommended/${sku}`);
  return response.data;
};
