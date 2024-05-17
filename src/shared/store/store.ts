import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/UI/categorySlice";
import modalSlice from "./slices/UI/modalSlice";

import { useDispatch } from "react-redux";
import inputSlice from "./slices/UI/inputSlice";
import pageSlice from "./slices/pageSlice";

export const store = configureStore({
  reducer: {
    categorySlice,
    modalSlice,
    pageSlice,
    inputSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
