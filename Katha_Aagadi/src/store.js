import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/searchReducer";
import loggedUser from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";

const reducer = {
  filter: filterReducer,
  loggedUser: loggedUser,
  cart: cartReducer,
};

const store = configureStore({ reducer });

export default store;
