import { createSlice } from "@reduxjs/toolkit";
import { clear } from "../pageSlice";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    name: "",
  },
  reducers: {
    setInput: (state, action) => {
      state.name = action.payload;
      clear();
    },
  },
});
export const { setInput } = inputSlice.actions;
export default inputSlice.reducer;
