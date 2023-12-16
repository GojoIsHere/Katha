import { createSlice } from "@reduxjs/toolkit";

const loggedUserSlice = createSlice({
  name: "loggedUser",
  initialState: [],
  reducers: {
    setUser(state, action) {
      return state.concat(action.payload);
    },
    getUser(state, action) {
      return state;
    },
    // eslint-disable-next-line no-unused-vars
    removeUser(state, action) {
      return [];
    },
  },
});

export const { setUser, removeUser, getUser } = loggedUserSlice.actions;
export default loggedUserSlice.reducer;
