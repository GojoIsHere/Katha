/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import {
  getCartDetail,
  editCart,
  deleteCartItems,
  emptyCart,
} from "../services/carts/cart";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCartItems(state, action) {
      return action.payload;
    },
    appendItem(state, action) {
      return state.concat(action.payload);
    },
    editCartItems(state, action) {
      return state.map((item) =>
        item.skus === action.payload.skus ? action.payload : item
      );
    },
    removeItem(state, action) {
      return state.filter((item) => item.skus !== action.payload.skus);
    },
    clearCart(state, action) {
      return action.payload;
    },
  },
});

export const initializeCart = () => {
  return async (dispatch) => {
    const cartDetail = await getCartDetail();
    dispatch(setCartItems(cartDetail));
  };
};

export const addItemsToCart = (item) => {
  return async (dispatch) => {
    const response = await editCart(item);
    dispatch(appendItem(response));
  };
};

export const editItemsToCart = (cartProd) => {
  return async (dispatch) => {
    const response = await editCart(cartProd);
    dispatch(editCartItems(response));
  };
};

export const removeCartItem = (skus) => {
  return async (dispatch) => {
    const response = await deleteCartItems(skus);
    dispatch(removeItem(response));
  };
};
export const removeAllCartItems = () => {
  return async (dispatch) => {
    const response = await emptyCart();
    dispatch(clearCart(response));
  };
};

export const {
  setCartItems,
  appendItem,
  removeItem,
  editCartItems,
  clearCart,
  calcTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
