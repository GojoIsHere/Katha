import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filterSearchTerm",
  initialState: "",
  reducers: {
    filterSearchItem(state, action) {
      return action.payload;
    },
  },
});

export const { filterSearchItem } = filterSlice.actions;
export default filterSlice.reducer;
